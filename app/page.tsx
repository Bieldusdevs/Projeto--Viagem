"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Plane, MapPin, Calendar, Users, Search, Menu, X, Globe, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import FlightScene from "@/components/canvas/FlightScene"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/search")
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <FlightScene />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-morphism px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Plane className="text-accent w-8 h-8" />
          <span className="text-2xl font-bold tracking-tighter text-primary">SKYFLY</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          <a href="#" className="hover:text-accent transition-colors">Destinos</a>
          <a href="#" className="hover:text-accent transition-colors">Ofertas</a>
          <a href="#" className="hover:text-accent transition-colors">Minhas Viagens</a>
          <Button variant="accent">Entrar</Button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-white pt-20 px-6 flex flex-col gap-6 text-xl font-medium"
        >
          <a href="#" onClick={() => setIsMenuOpen(false)}>Destinos</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Ofertas</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Minhas Viagens</a>
          <Button variant="accent" className="w-full">Entrar</Button>
        </motion.div>
      )}

      {/* Hero Section */}
      <main className="relative pt-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl lg:text-8xl font-extrabold text-primary leading-tight mb-6">
              Explore o <span className="text-gradient">Mundo</span> Sem Fronteiras.
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg">
              Encontre as melhores ofertas de voos para qualquer lugar do planeta com a tecnologia SkyFly. Conforto, segurança e o melhor preço.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Shield className="w-4 h-4 text-green-500" /> Pagamento Seguro
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Zap className="w-4 h-4 text-yellow-500" /> Reserva Instantânea
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Globe className="w-4 h-4 text-blue-500" /> 200+ Destinos
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-morphism p-8 rounded-3xl shadow-2xl border border-white/50"
          >
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold flex items-center gap-2 text-slate-700">
                    <MapPin className="w-4 h-4" /> Origem
                  </label>
                  <Input placeholder="Cidade ou Aeroporto" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold flex items-center gap-2 text-slate-700">
                    <MapPin className="w-4 h-4" /> Destino
                  </label>
                  <Input placeholder="Para onde você vai?" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold flex items-center gap-2 text-slate-700">
                    <Calendar className="w-4 h-4" /> Data de Ida
                  </label>
                  <Input type="date" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold flex items-center gap-2 text-slate-700">
                    <Users className="w-4 h-4" /> Passageiros
                  </label>
                  <Input type="number" min="1" defaultValue="1" required />
                </div>
              </div>

              <Button type="submit" variant="accent" className="w-full h-14 text-lg flex gap-2">
                <Search className="w-5 h-5" /> Buscar Voos
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Featured Destinations */}
        <section className="py-24">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">Destinos Populares</h2>
              <p className="text-slate-600">Lugares que você não pode deixar de visitar este ano.</p>
            </div>
            <Button variant="outline">Ver Todos</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { city: "Tóquio", country: "Japão", price: "R$ 4.500", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=400&h=300&fit=crop" },
              { city: "Paris", country: "França", price: "R$ 3.200", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=400&h=300&fit=crop" },
              { city: "Nova York", country: "EUA", price: "R$ 2.800", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=400&h=300&fit=crop" },
            ].map((dest, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg"
              >
                <img src={dest.img} alt={dest.city} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold">{dest.city}</h3>
                  <p className="text-sm opacity-80 mb-2">{dest.country}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">A partir de {dest.price}</span>
                    <Button size="sm" variant="accent" className="h-8">Ver Voos</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Plane className="text-accent w-6 h-6" />
              <span className="text-xl font-bold tracking-tighter">SKYFLY</span>
            </div>
            <p className="text-slate-400 text-sm">
              A maneira mais inteligente e rápida de reservar suas próximas aventuras pelo mundo.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Imprensa</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <div className="flex gap-2">
              <Input className="bg-slate-800 border-slate-700 text-white" placeholder="Seu e-mail" />
              <Button variant="accent">Assinar</Button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          © 2026 SkyFly Travel. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}

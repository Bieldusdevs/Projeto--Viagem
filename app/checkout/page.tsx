"use client"

import React, { Suspense } from "react"
import { motion } from "framer-motion"
import { CreditCard, User, Mail, Phone, Plane, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter, useSearchParams } from "next/navigation"

function CheckoutContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const flightId = searchParams.get("flightId")

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/confirmation")
  }

  return (
    <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
      
      {/* Form Section */}
      <div className="lg:col-span-2 space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
        >
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <User className="w-6 h-6 text-accent" /> Dados do Passageiro
          </h2>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Nome Completo</label>
              <Input placeholder="João Silva" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">CPF/Passaporte</label>
              <Input placeholder="000.000.000-00" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">E-mail</label>
              <Input type="email" placeholder="joao@email.com" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Telefone</label>
              <Input placeholder="+55 (11) 99999-9999" required />
            </div>
          </form>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
        >
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <CreditCard className="w-6 h-6 text-accent" /> Pagamento
          </h2>
          
          <form onSubmit={handlePayment} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Número do Cartão</label>
              <Input placeholder="0000 0000 0000 0000" required />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Validade</label>
                <Input placeholder="MM/AA" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">CVV</label>
                <Input placeholder="123" required />
              </div>
            </div>
            <Button type="submit" variant="accent" className="w-full h-14 text-lg">
              Confirmar e Pagar Agora
            </Button>
          </form>
        </motion.div>
      </div>

      {/* Summary Section */}
      <div className="lg:col-span-1">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-primary text-white p-8 rounded-3xl shadow-xl sticky top-24"
        >
          <h2 className="text-xl font-bold mb-6">Resumo da Reserva</h2>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                <Plane className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Voo Selecionado</p>
                <p className="font-medium">SkyHigh Airways #{flightId || '12345'}</p>
              </div>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Tarifa Base</span>
              <span>R$ 1.200,00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Taxas de Embarque</span>
              <span>R$ 150,00</span>
            </div>
            <div className="border-t border-slate-700 pt-4 flex justify-between items-center">
              <span className="text-lg font-bold">Total</span>
              <span className="text-2xl font-extrabold text-accent">R$ 1.350,00</span>
            </div>
          </div>

          <div className="bg-slate-800 p-4 rounded-2xl text-xs text-slate-400 leading-relaxed">
            Ao clicar em pagar, você concorda com os termos de transporte e a política de cancelamento da SkyFly Travel.
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 px-6 pb-12">
      <Suspense fallback={
        <div className="max-w-6xl mx-auto flex items-center justify-center h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
        </div>
      }>
        <CheckoutContent />
      </Suspense>
    </div>
  )
}

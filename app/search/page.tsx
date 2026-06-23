"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Plane, Clock, ShieldCheck, ChevronRight, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface Flight {
  id: string
  airline: string
  departure: string
  arrival: string
  price: number
  duration: string
  class: string
}

const MOCK_FLIGHTS: Flight[] = [
  { id: "1", airline: "SkyHigh Airways", departure: "10:00", arrival: "13:30", price: 1200, duration: "3h 30m", class: "Econômica" },
  { id: "2", airline: "Global Jet", departure: "14:00", arrival: "17:45", price: 1500, duration: "3h 45m", class: "Executiva" },
  { id: "3", airline: "Oceanic Air", departure: "18:00", arrival: "21:15", price: 900, duration: "3h 15m", class: "Econômica" },
  { id: "4", airline: "StarFly", departure: "06:00", arrival: "09:20", price: 1100, duration: "3h 20m", class: "Econômica" },
  { id: "5", airline: "Elite Wings", departure: "22:00", arrival: "01:30", price: 2500, duration: "3h 30m", class: "Primeira Classe" },
]

export default function SearchPage() {
  const router = useRouter()
  const [filter, setFilter] = useState("Todos")

  const filteredFlights = filter === "Todos" 
    ? MOCK_FLIGHTS 
    : MOCK_FLIGHTS.filter(f => f.class === filter)

  return (
    <div className="min-h-screen bg-slate-50 pt-24 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">Voos Disponíveis</h1>
            <p className="text-slate-600">Encontramos {MOCK_FLIGHTS.length} opções para a sua viagem.</p>
          </div>
          
          <div className="flex gap-2">
            {["Todos", "Econômica", "Executiva", "Primeira Classe"].map((f) => (
              <Button 
                key={f} 
                variant={filter === f ? "accent" : "outline"} 
                onClick={() => setFilter(f)}
                className="rounded-full"
              >
                {f}
              </Button>
            ))}
          </div>
        </header>

        <div className="grid gap-6">
          {filteredFlights.map((flight, i) => (
            <motion.div 
              key={flight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-6 w-full md:w-auto">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center">
                  <Plane className="text-slate-400 w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">{flight.airline}</h3>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-green-500" /> Verificado
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">{flight.departure}</div>
                  <div className="text-xs text-slate-400 uppercase">Partida</div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {flight.duration}
                  </div>
                  <div className="w-24 h-px bg-slate-200 relative">
                    <div className="absolute -top-1 right-0 w-2 h-2 bg-slate-300 rounded-full" />
                    <div className="absolute -top-1 left-0 w-2 h-2 bg-slate-300 rounded-full" />
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase">Direto</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{flight.arrival}</div>
                  <div className="text-xs text-slate-400 uppercase">Chegada</div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-4 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0">
                <div className="text-right">
                  <div className="text-3xl font-extrabold text-primary">R$ {flight.price}</div>
                  <div className="text-xs text-slate-500">{flight.class}</div>
                </div>
                <Button 
                  variant="accent" 
                  className="w-full md:w-auto flex gap-2"
                  onClick={() => router.push(`/checkout?flightId=${flight.id}`)}
                >
                  Selecionar <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

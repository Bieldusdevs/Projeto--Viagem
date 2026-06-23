"use client"

import React from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Download, Printer, Plane, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function ConfirmationPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-slate-50 pt-24 px-6 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full text-center space-y-8"
      >
        <div className="flex justify-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center"
          >
            <CheckCircle2 className="w-12 h-12" />
          </motion.div>
        </div>

        <div>
          <h1 className="text-4xl font-extrabold text-primary mb-4">Reserva Confirmada!</h1>
          <p className="text-slate-600 text-lg">
            Sua viagem foi reservada com sucesso. O e-ticket foi enviado para o seu e-mail.
          </p>
        </div>

        {/* Digital Ticket */}
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-dashed border-slate-200 overflow-hidden max-w-md mx-auto text-left">
          <div className="bg-primary p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Plane className="w-5 h-5 text-accent" />
              <span className="font-bold tracking-tight">BOARDING PASS</span>
            </div>
            <span className="text-xs opacity-60">SkyFly #SF-99281</span>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold">Origem</p>
                <p className="text-xl font-bold text-primary">SÃO PAULO</p>
                <p className="text-sm text-slate-500">GRU Airport</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-400 uppercase font-bold">Destino</p>
                <p className="text-xl font-bold text-primary">TÓQUIO</p>
                <p className="text-sm text-slate-500">HND Airport</p>
              </div>
            </div>

            <div className="flex justify-between items-center py-4 border-y border-slate-100">
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold">Data</p>
                <p className="font-bold">24 JUN 2026</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold">Assento</p>
                <p className="font-bold">12A (Janela)</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold">Portão</p>
                <p className="font-bold">B12</p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 p-4 flex justify-center border-t border-slate-100">
            <div className="w-48 h-12 bg-slate-200 rounded flex items-center justify-center text-slate-400 font-mono text-xs">
              || ||| || |||| || ||| |||| ||
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="flex gap-2" onClick={() => router.push("/")}>
            <ArrowLeft className="w-4 h-4" /> Voltar ao Início
          </Button>
          <Button className="flex gap-2">
            <Download className="w-4 h-4" /> Baixar PDF
          </Button>
          <Button variant="outline" className="flex gap-2">
            <Printer className="w-4 h-4" /> Imprimir
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

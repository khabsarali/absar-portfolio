import { motion } from "motion/react";
import { useEffect, useState, useMemo } from "react";

export default function Preloader() {
  const [percent, setPercent] = useState(0);

  // Generate random data shards for the background
  const binaryShards = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 7,
      delay: Math.random() * 5,
      content: Math.random() > 0.5 ? "0" : "1",
    }));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const glitchAnimation = {
    textShadow: [
      "2px 0 #00ffff, -2px 0 #ff00ff",
      "-2px 0 #00ffff, 2px 0 #ff00ff",
      "2px 0 #00ffff, -2px 0 #ff00ff",
      "0px 0 #00ffff, 0px 0 #ff00ff",
    ],
    x: [0, -2, 2, -1, 1, 0],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      repeatType: "mirror" as const,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        filter: "blur(20px)",
        scale: 1.1,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#030014] select-none pointer-events-auto overflow-hidden"
    >
      {/* Background Binary Shards */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {binaryShards.map((shard) => (
          <motion.div
            key={shard.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0, 1, 0],
              y: [20, -40],
            }}
            transition={{
              duration: shard.duration,
              repeat: Infinity,
              delay: shard.delay,
              ease: "linear",
            }}
            className="absolute font-mono text-[10px] text-brand-cyan pointer-events-none"
            style={{ left: shard.left, top: shard.top }}
          >
            {shard.content}
          </motion.div>
        ))}
      </div>

      <div className="relative flex flex-col items-center z-10">
        {/* Animated Initials with Glitch */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-16"
        >
          <motion.div
            animate={glitchAnimation}
            className="text-7xl font-display font-black text-white tracking-tighter relative"
          >
            <span className="relative z-10">ABSAR.</span>
            {/* Split duplication for glitch effect */}
            <motion.span 
                className="absolute inset-0 text-brand-cyan opacity-50 -z-10 translate-x-1"
                animate={{ x: [-1, 2, -2, 1, 0] }}
                transition={{ duration: 0.1, repeat: Infinity }}
            >
                ABSAR.
            </motion.span>
            <motion.span 
                className="absolute inset-0 text-brand-purple opacity-50 -z-10 -translate-x-1"
                animate={{ x: [1, -2, 2, -1, 0] }}
                transition={{ duration: 0.1, repeat: Infinity, delay: 0.05 }}
            >
                ABSAR.
            </motion.span>
          </motion.div>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute -bottom-3 h-0.5 bg-linear-to-r from-transparent via-brand-cyan to-transparent"
          />
        </motion.div>

        {/* Technical Progress Container */}
        <div className="w-72 max-w-[85vw]">
          <div className="flex justify-between items-end mb-3">
            <div className="flex flex-col">
               <div className="flex items-center gap-2">
                 <motion.div 
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_#00ffff]"
                 />
                 <span className="text-[10px] font-bold text-brand-lavender uppercase tracking-[0.4em]">Initializing Core</span>
               </div>
               <span className="text-[9px] font-mono text-brand-purple/50 mt-1.5 h-4">
                 {percent < 25 && "> LOAD_MODULE_AUTH..."}
                 {percent >= 25 && percent < 50 && "> ESTABLISH_P2P_LINK..."}
                 {percent >= 50 && percent < 75 && "> DECRYPT_PORTFOLIO_V2..."}
                 {percent >= 75 && percent < 100 && "> FINALIZING_UI_THREAD..."}
                 {percent >= 100 && "> KERNEL_READY"}
               </span>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-xs font-mono text-brand-cyan leading-none">{Math.min(percent, 100)}%</span>
                <span className="text-[8px] font-mono text-brand-white/20 uppercase mt-1">Status: OK</span>
            </div>
          </div>
          
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 relative p-[2px]">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(percent, 100)}%` }}
              className="h-full bg-linear-to-r from-brand-purple via-brand-cyan to-brand-purple bg-[length:200%_100%] rounded-full shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
            />
          </div>
        </div>

        {/* Rotating Geometric Arrays */}
        <div className="absolute -z-10 w-[180%] aspect-square">
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-brand-purple/5 rounded-full border-dashed" 
            />
            <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[15%] border border-brand-cyan/5 rounded-full border-dashed p-4" 
            />
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[30%] border border-white/5 rounded-full" 
            />
        </div>
        
        {/* Scanning Line Effect */}
        <motion.div
           animate={{ 
             top: ["-5%", "105%", "-5%"],
             opacity: [0, 0.4, 0]
           }}
           transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
           className="fixed left-0 right-0 h-[2px] bg-brand-cyan/20 z-10 w-full pointer-events-none shadow-[0_0_15px_rgba(0,255,255,0.2)]"
        />
      </div>
      
      {/* HUD Corner Elements */}
      <div className="fixed top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-brand-purple/10 flex items-start justify-start p-2">
        <div className="w-1 h-1 bg-brand-purple/30 rounded-full animate-pulse" />
      </div>
      <div className="fixed top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-brand-purple/10 flex items-start justify-end p-2">
        <span className="text-[8px] font-mono text-brand-purple/30 vertical-rl">PORT_8080</span>
      </div>
      <div className="fixed bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-brand-purple/10 flex items-end justify-start p-2">
         <span className="text-[8px] font-mono text-brand-purple/30">SYS_V2.4</span>
      </div>
      <div className="fixed bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-brand-purple/10 flex items-end justify-end p-2">
        <div className="w-2 h-2 border border-brand-purple/30 rounded-sm animate-spin" />
      </div>
      
      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 bg-[#030014] mix-blend-overlay pointer-events-none opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] -z-10" />
    </motion.div>
  );
}

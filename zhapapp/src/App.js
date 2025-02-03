import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SimpleReactApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <motion.h1 
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Simple React Counter
      </motion.h1>
      <Card className="p-6 shadow-xl rounded-2xl bg-white">
        <CardContent className="flex flex-col items-center">
          <p className="text-2xl font-semibold mb-4">Count: {count}</p>
          <div className="flex gap-4">
            <Button onClick={() => setCount(count + 1)}>Increment</Button>
            <Button onClick={() => setCount(0)} variant="destructive">Reset</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

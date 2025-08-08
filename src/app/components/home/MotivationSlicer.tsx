"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  FaLightbulb,
  FaMicroscope,
  FaSeedling,
  FaBrain,
  FaUsers,
} from "react-icons/fa";

const phrases = [
  {
    text: "La investigación transforma ideas en impacto.",
    icon: <FaLightbulb />,
  },
  {
    text: "Un semillero es el inicio de un gran proyecto.",
    icon: <FaSeedling />,
  },
  {
    text: "La ciencia es el puente entre el conocimiento y el cambio.",
    icon: <FaMicroscope />,
  },
  { text: "Investigar es sembrar futuro.", icon: <FaBrain /> },
  { text: "Cada idea cuenta, cada estudiante inspira.", icon: <FaUsers /> },
];

export default function MotivationSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!isClient) return null; // Evita renderizado en SSR

  return (
    <Box
      sx={{
        maxWidth: "90%",
        mx: "auto",
        my: 5,
        background:
          "linear-gradient(145deg, #1800ad 0%, #1800ad 70%, #ff3131 100%)",
        color: "#fff",
        borderRadius: 4,
        boxShadow: 4,
        overflow: "hidden",
        minHeight: "60vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* Ícono */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: { xs: "10rem", sm: "12rem", md: "20rem" },
          p: 4,
        }}
      >
        {phrases[currentIndex].icon}
      </Box>

      {/* Frase */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          px: 3,
          py: 4,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            fontWeight: "bold",
            transition: "opacity 0.7s ease",
          }}
        >
          {phrases[currentIndex].text}
        </Typography>
      </Box>

      {/* Indicadores */}
      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          display: "flex",
          justifyContent: "center",
          width: "100%",
          gap: 1,
        }}
      >
        {phrases.map((_, i) => (
          <Box
            key={i}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor:
                i === currentIndex ? "#fff" : "rgba(255,255,255,0.5)",
              transition: "all 0.5s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

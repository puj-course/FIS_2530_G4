package com.fis2530g4;

public class EmissionCalculator {

    // Clasifica por CO2 (g/km)
    public int classifyRouteByCO2(double gramsPerKm) {
        if (gramsPerKm < 50) return 0;          // verde
        else if (gramsPerKm < 100) return 1;    // moderado
        else if (gramsPerKm < 150) return 2;    // alto
        else return 3;                          // muy alto
    }

    public double weightedAverage(double[] values, double[] weights) {
        if (values == null || weights == null || values.length != weights.length || values.length == 0) {
            throw new IllegalArgumentException("Valores y pesos inválidos");
        }
        double num = 0, den = 0;
        for (int i = 0; i < values.length; i++) {
            num += values[i] * weights[i];
            den += weights[i];
        }
        return num / den;
    }
}

package com.fis2530g4;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class EmissionCalculatorTest {

    @Test
    void classify_basic() {
        EmissionCalculator calc = new EmissionCalculator();
        assertEquals(0, calc.classifyRouteByCO2(30));
        assertEquals(1, calc.classifyRouteByCO2(80));
        assertEquals(2, calc.classifyRouteByCO2(120));
        assertEquals(3, calc.classifyRouteByCO2(180));
    }

    @Test
    void weighted_ok() {
        EmissionCalculator calc = new EmissionCalculator();
        double v = calc.weightedAverage(new double[]{2,4,6}, new double[]{1,1,2});
        assertEquals(4.5, v, 1e-9);
    }

    @Test
    void weighted_invalid() {
        EmissionCalculator calc = new EmissionCalculator();
        assertThrows(IllegalArgumentException.class,
            () -> calc.weightedAverage(new double[]{1}, new double[]{}));
    }
}

/**
 * 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
 * (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele 
 * calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
 */


import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class FibonacciSearch {
    public static void main(String[] args) {        
        List<Integer> sequence = new ArrayList<Integer>();
        int firstNumber = 0;
        int secondNumber = 1;

        sequence.add(firstNumber);
        sequence.add(secondNumber);

        System.out.print("Informe um número: ");
        Scanner scn = new Scanner(System.in);
        int inputNumber = scn.nextInt();
        scn.close();
        
        boolean flag = false;

        while (firstNumber <= inputNumber) {
            if (inputNumber == 0 || inputNumber == firstNumber) {
                flag = true;
            }
            
            int aux = secondNumber;
            secondNumber = firstNumber + secondNumber;
            firstNumber = aux;

            sequence.add(firstNumber);
        } 

        System.out.println(sequence);

        if (flag) 
            System.out.println("O número pertence a sequência de Fibonacci");
        else
            System.out.println("O número não pertence a sequência de Fibonacci");

    }
}

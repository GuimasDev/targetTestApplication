import java.util.Scanner;

/**
 * 5) Escreva um programa que inverta os caracteres de um string.
 */

public class inverterCaracter {
    public static void main(String[] args) {
        System.out.print("Informe uma palavra: ");
        Scanner scn = new Scanner(System.in);
        String inputString = scn.next();
        scn.close();

        System.out.print(reverter(inputString));
    }

    static String reverter(String str){
        String newStr = "";
        for (int i = str.length(); i > 0; i--) {
            newStr += str.charAt(i-1);
        }
        return newStr;
    }
}

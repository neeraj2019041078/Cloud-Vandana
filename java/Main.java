import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {

        Map<Character, Integer> romanMap = createRomanMap();
        System.out.print("Enter a Roman Number: ");
        String romanInput = "IX";

        int result = romanToInt(romanInput, romanMap);
        System.out.println("Integer value: " + result);
    }

    private static Map<Character, Integer> createRomanMap() {
        Map<Character, Integer> m = new HashMap<>();
        m.put('I', 1);
        m.put('V', 5);
        m.put('X', 10);
        m.put('L', 50);
        m.put('C', 100);
        m.put('D', 500);
        m.put('M', 1000);
        return m;
    }

    private static int romanToInt(String s, Map<Character, Integer> romanMap) {
        int sum = 0;
        for (int i = 0; i < s.length(); i++) {
            if (i < s.length() - 1 && romanMap.get(s.charAt(i)) < romanMap.get(s.charAt(i + 1))) {
                sum += romanMap.get(s.charAt(i + 1)) - romanMap.get(s.charAt(i));
                i++;
                continue;
            } else {
                sum += romanMap.get(s.charAt(i));
            }
        }
        return sum;
    }
}

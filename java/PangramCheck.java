import java.util.HashSet;
import java.util.Set;

public class PangramCheck {
    public static void main(String[] args) {
        String sentence = "The quick brown fox jumps over the lazy dog";
        
        Set<Character> set = new HashSet<>();
        
        for (char c : sentence.toCharArray()) {
            if (Character.isAlphabetic(c)) {
                set.add(Character.toLowerCase(c));
            }
        }
        
        boolean isPangram = set.size() == 26;
        
        System.out.println("Pangram: " + isPangram);
    }
}

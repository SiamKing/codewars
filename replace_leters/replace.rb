def replace_letters(word)
 alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
 consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
 vowels = ['a','e','i','o','u']
 new_word = []
 word.split('').each do |letter|
   i = alphabet.find_index(letter)
   if consonants.include?(letter)
     i += 1
     loop do
       i = 0 if i > 21
       if vowels.include?(alphabet[i])
         new_word << alphabet[i]
         break
       end
       i += 1
      end
    else
      i = 26 if i == 0
      new_word << alphabet[i - 1]
    end
  end
  new_word.join('')
end

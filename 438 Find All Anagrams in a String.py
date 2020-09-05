from collections import defaultdict


def find_anagrams(s, t):
    result = []
    ch_map = defaultdict(int)
    for ch in t:
        ch_map[ch] += 1
    for index in range(len(s)):
        ch = s[index]
        print('current index:', index, 'ch:', s[index])
        if index >= len(t):
            old_ch = s[index-len(t)]
            print('old_ch: ', old_ch)
            ch_map[old_ch] += 1
            if ch_map[old_ch] == 0:
                del ch_map[old_ch]

        ch_map[ch] -= 1
        if ch_map[ch] == 0:
            del ch_map[ch]

        print('ch_map: ', ch_map)

        if index+1 >= len(t) and len(ch_map) == 0:
            result.append(index-len(t)+1)
    return result


print(find_anagrams('acdbacdacb', 'abc'))

"""
Dictionaries are a great tool to solve anagram problems, and is the case for this problem as well. 
First populate a dictionary with all the character count into a dictionary. This can be understood as the characters that need to appear in order for there to be an anagram.
Then use a sliding window, with a window size of len(t), we process every new character that is new to the window by subtracting 1 from our character map, 
and add 1 to the character map for every character that leaves our sliding window. If we do this, if all values are 0 in the map, then an anagram does exist at the beginning index of 
the sliding window since all characters in the anagram is accounted for.

This actually does not leave us with a linear solution, as processing the dictionary is not a constant operation. 
Instead as an optimization, every time a value is added or subtracted from the character map, if the value is 0 for that character, remove it from the dictionary. 
Then we only have to check if the length of the dictionary is 0 which is a constant time operation.

The time complexity is O(n) for iterating over every character, as every operation we do on every character is O(1).
The space complexity is O(n) for potentially filling up every character in the dictionary if every character is different. 
"""

x = []
with open('valid_solutions.csv', 'r') as f:
    x = [line.rstrip('\n') for line in f.readlines()]

# Convert the list to JavaScript array syntax
js_array_syntax = '[' + ', '.join([f"'{word}'" for word in x]) + ']'

# Write the JavaScript array syntax to a new text file
with open('output.txt', 'w') as f:
    f.write(js_array_syntax)

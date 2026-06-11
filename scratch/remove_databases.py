with open('/Users/apple/Downloads/nutritioncolours/constants.tsx', 'r') as f:
    lines = f.readlines()

# Line numbers are 1-indexed. We want to remove lines from 1771 to 2308 (inclusive).
# In 0-indexed Python array, that is index 1770 to 2307.
new_lines = lines[:1770]

with open('/Users/apple/Downloads/nutritioncolours/constants.tsx', 'w') as f:
    f.writelines(new_lines)

print("Successfully truncated constants.tsx. New total lines:", len(new_lines))

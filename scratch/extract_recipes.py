with open('/Users/apple/Downloads/nutritioncolours/constants.tsx', 'r') as f:
    lines = f.readlines()

# RECIPES is from line 284 to 1357 (0-indexed lines[283] to lines[1356]).
recipes_lines = lines[283:1357]
remaining_before = lines[:283]
remaining_after = lines[1357:]

# Write to recipes_database.ts
with open('/Users/apple/Downloads/nutritioncolours/recipes_database.ts', 'w') as f:
    f.write("import { Recipe } from './types';\n\n")
    f.writelines(recipes_lines)

# Write truncated constants.tsx
with open('/Users/apple/Downloads/nutritioncolours/constants.tsx', 'w') as f:
    f.writelines(remaining_before + remaining_after)

print("Successfully split recipes. recipes_database.ts written, constants.tsx truncated.")

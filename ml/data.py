import pandas as pd

# Read the large Excel file
file_path = "main.csv"
df = pd.read_excel(file_path)

# Select the first 500 entries
df_subset = df.head(500)

# Write the subset to a new Excel file
output_path = "data.csv"
df_subset.to_excel(output_path, index=False)

print(f"Subset of 500 entries has been created and saved to {output_path}")
import os

categories = [
    "Computers", "Laptops", "Monitors", "Printing & scanning", "Software", "Tablets",
    "Audio", "Graphics cards", "Keyboard and mice", "Networking", "Peripherals", "Storage"
]

os.makedirs("assets/images", exist_ok=True)

for cat in categories:
    filename = cat.lower().replace(" ", "-").replace("&", "and") + ".svg"
    # Create valid filename
    path = os.path.join("assets/images", filename)
    
    svg_content = f'''<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ecf0f1"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="#2c3e50">{cat}</text>
</svg>'''
    
    with open(path, "w") as f:
        f.write(svg_content)
    print(f"Generated {path}")

# Generate Logo
with open("assets/images/logo.svg", "w") as f:
    f.write('''<svg width="200" height="60" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#fff"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="24" fill="#0056b3">COMPUTER FORCE</text>
</svg>''')
print("Generated assets/images/logo.svg")

// making one array for the whole menu, and then multiple inner arrays for the different sections of the menu.  I'll start with just drinks, appetizers, soup/salad, mains, and desserts.  I'll give each item some key/value pairs of title, image, price, and description.  Oh, I'll also add an item so we can use that as an index

const menuArray = [
  [
    {"item": "1", "title": "Asahi Super Dry", "image": "https://www.asahisuperdry.com/media/images/OurBeer-lg.original.jpg", "price": "4.99", "description": "'Karakuchi' means dry, and it is the word that best describes the sophisticated yet congenial character of 'ASAHI SUPER DRY'. The name was given the title Super to mean a more dry-taste. Its refreshingly crisp, clear taste makes it an excellent match for any cuisine."},
    {"item": "2", "title": "Peroni", "image": "https://132257054.cdn6.editmysite.com/uploads/1/3/2/2/132257054/s141702492982091317_p65_i2_w1223.jpeg", "price": "4.99", "description": "A pale golden, crisp and refreshing beer, with a delicate balance of bitterness, citrus and aromatic notes and a fast, clean finish"},
    {"item": "3", "title": "House Sake", "image": "https://www.realsimple.com/thmb/1zW2bEiO2AHUtEfGmEvpL2X2_0g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sake-2000-b6b5005ff0f249ee889df759a1d5d123.jpg", "price": "19.99 per bottle", "description": "Our house Sake is an alcoholic beverage made from rice through fermentation and filtration. For fermentation of sake, rice koji, a kind of fungi grown on rice, is used. Sake has been made for over 1,000 years all over the Japanese islands."},
    {"item": "4", "title": "House Red", "image": "https://www.thespruceeats.com/thmb/N9TEoqtQz-R9zkjMXM8I530sj30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/red-wine-is-poured-into-a-glass-from-a-bottle--light-background--1153158143-98320451802c485cb6d7b5437c7fd60a.jpg", "price": "19.99 per bottole", "description": "Our house red combine a fruity oak flavor with a daring, almost romantic, tinger of aged elder berries personally stomped on by Italian Monks who have never met a woman and absolutely do not plan to." },
    {"item": "5", "title": "Assorted Fountain Drinks", "image": "https://southpark.garlicknotpizza.com/wp-content/uploads/sites/15/2020/08/grid-fountain-drinks2.png", "price": "4.99", "description": "We serve Coca Cola products here.  We do not respect Pepsi and we never will.  It's a degenerate soda line.  If you ask for Pepsi we will ask you politely, but firmly, to leave and to never come back."},
    {"item": "6", "title": "espresso", "image": "https://www.tasteofhome.com/wp-content/uploads/2023/03/TOH-espresso-GettyImages-1291298315-JVcrop.jpg", "price": "3.99", "description": "Our robust and bold espresso is made from beans harvested, individually, by the hands of small sicialian children who were paid in rice.  Also, we don't serve tea so stop asking.  We will NEVER serve tea."}
  ],
  [
    {"item": "1", "title": "Edamame", "image": "https://i.ytimg.com/vi/_jNvqD9J53M/maxresdefault.jpg", "price": "7.99", "description": "Edamame are young soybeans harvested before they ripen or harden. Available shelled, in the pod, fresh, or frozen, they are a popular, plant-based food that may be good for a person's health. Edamame beans are naturally gluten-free and low in calories. They contain no cholesterol and provide protein, iron, and calcium."}
  ]
]

const drinksArray = menuArray[0];
const appsArray = menuArray[1];

export { menuArray, drinksArray, appsArray };
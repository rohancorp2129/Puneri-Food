// food-data.js - Centralized food database for Pune Food Gallery
const foodDatabase = [
    // ===== Street Food =====
    {
        name: "Vada Pav",
        category: "street-food",
        desc: "A crispy potato fritter tucked inside a pav with dry garlic chutney",
        link: "street-food.html#vada-pav",
        keywords: "vada pav batata burger snack potato fritter"
    },
    {
        name: "Pav Bhaji",
        category: "street-food",
        desc: "A spicy mashed veggie curry with buttered pav buns",
        link: "street-food.html#pav-bhaji",
        keywords: "pav bhaji vegetable curry bread mashed"
    },
    {
        name: "Bhel Puri",
        category: "street-food",
        desc: "A crunchy mix of puffed rice, sev, vegetables, and tangy chutneys",
        link: "street-food.html#bhel-puri",
        keywords: "bhel puri chaat crispy puffed rice sev"
    },
    {
        name: "Pani Puri",
        category: "street-food",
        desc: "Crispy hollow puris filled with spicy tamarind water and potato mix",
        link: "street-food.html#pani-puri",
        keywords: "pani puri golgappa water balls spicy tangy"
    },

    // ===== Traditional Dishes =====
    {
        name: "Misal Pav",
        category: "traditional-food",
        desc: "A spicy lentil-based curry loaded with crunchy toppings",
        link: "traditional-food.html#misal-pav",
        keywords: "misal pav sprouts curry spicy maharashtrian"
    },
    {
        name: "Pithla Bhakri",
        category: "traditional-food",
        desc: "Rustic gram flour curry served with millet flatbread",
        link: "traditional-food.html#pithla-bhakri",
        keywords: "pithla bhakri gram flour rural traditional"
    },
    {
        name: "Thalipeeth",
        category: "traditional-food",
        desc: "A multi-grain flatbread served with yogurt or chutney",
        link: "traditional-food.html#thalipeeth",
        keywords: "thalipeeth multigrain pancake breakfast healthy"
    },

    // ===== Sweets & Desserts =====
    {
        name: "Mastani",
        category: "sweets",
        desc: "A rich milkshake loaded with ice cream and dry fruits",
        link: "sweets.html#mastani",
        keywords: "mastani milkshake ice cream mango thick"
    },
    {
        name: "Puran Poli",
        category: "sweets",
        desc: "Sweet flatbread stuffed with lentils and jaggery",
        link: "sweets.html#puran-poli",
        keywords: "puran poli sweet lentil holige obbattu"
    },
    {
        name: "Modak",
        category: "sweets",
        desc: "Sweet dumplings stuffed with coconut and jaggery",
        link: "sweets.html#modak",
        keywords: "modak ganesh chaturthi steamed sweet dumpling"
    },

    // ===== Breakfast Items =====
    {
        name: "Kanda Poha",
        category: "breakfast",
        desc: "Flattened rice sautéed with onions and spices",
        link: "breakfast.html#kanda-poha",
        keywords: "poha flattened rice breakfast light onion"
    },
    {
        name: "Sabudana Khichdi",
        category: "breakfast",
        desc: "Tapioca pearls cooked with peanuts and potatoes",
        link: "breakfast.html#sabudana-khichdi",
        keywords: "sabudana khichdi tapioca fasting food vrat"
    },

    // ===== Festival Specials =====
    {
        name: "Ukdiche Modak",
        category: "festival",
        desc: "Steamed sweet dumplings for Ganesh Chaturthi",
        link: "festival.html#ukdiche-modak",
        keywords: "modak steamed ganesh festival sweet"
    },
    {
        name: "Shrikhand",
        category: "festival",
        desc: "Sweetened yogurt flavored with saffron and cardamom",
        link: "festival.html#shrikhand",
        keywords: "shrikhand yogurt sweet dessert festive"
    }
];

// Make available globally
window.foodDatabase = foodDatabase;
const products = [
    {
        id: 1,
        name: 'Hertfold Upholstered Chair',
        price: 101,
        reviewQuantity: 56,
        img1: 'https://picsum.photos/300/200?random=1',
        img2: 'https://picsum.photos/300/200?random=21',
        description: 'A stylish chair for your living room.',
        longDescription: 'This comfortable and chic chair adds elegance to any space while providing a cozy spot to relax.',
        features: ['High-density foam cushioning', 'Solid wood frame', 'Durable upholstery'],
        specifications: { weight: '15 kg', dimensions: '75 x 70 x 80 cm', material: 'Fabric, wood, foam', color: 'Gray' },
        usageInstructions: 'Spot clean with a damp cloth.',
        warranty: '1-year manufacturer warranty.',
        reviews: [{ username: 'John Doe', date: '2024-10-10', comment: 'Very comfortable!' }],
        slug: 'hertfold-upholstered-chair',
        categories: ['Furniture', 'Living Room'],
        brand: 'Home Elegance',
        colors: [{ name: 'Gray', hex: '#808080' }, { name: 'Beige', hex: '#D9C4A1' }, { name: 'Blue', hex: '#4A90E2' }, { name: 'Green', hex: '#8BC34A' }, { name: 'Black', hex: '#000000' }],
        inStock: true,
        tags: ['upholstered', 'modern', 'comfortable'],
    },
    {
        id: 2,
        name: 'Oak Dining Table',
        price: 250,
        reviewQuantity: 34,
        img1: 'https://picsum.photos/300/200?random=2',
        img2: 'https://picsum.photos/300/200?random=22',
        description: 'A beautiful oak dining table for family meals.',
        longDescription: 'Crafted from solid oak, this table provides ample space for six people to dine comfortably.',
        features: ['Solid oak wood', 'Seats up to 6 people', 'Elegant and sturdy design'],
        specifications: { weight: '50 kg', dimensions: '200 x 90 x 75 cm', material: 'Solid oak wood', color: 'Natural oak' },
        usageInstructions: 'Wipe clean with a damp cloth.',
        warranty: '2-year warranty.',
        reviews: [{ username: 'Emily L.', date: '2024-09-12', comment: 'Great addition to our dining room!' }],
        slug: 'oak-dining-table',
        categories: ['Furniture', 'Dining Room'],
        brand: 'OakCraft',
        colors: [{ name: 'Natural Oak', hex: '#C19A6B' }, { name: 'Dark Brown', hex: '#4E342E' }, { name: 'Gray', hex: '#B0BEC5' }, { name: 'White', hex: '#FFFFFF' }, { name: 'Black', hex: '#000000' }],
        inStock: false,
        tags: ['oak', 'dining', 'solid wood'],
    },
    {
        id: 3,
        name: 'Modern Coffee Table',
        price: 85,
        reviewQuantity: 112,
        img1: 'https://picsum.photos/300/200?random=3',
        img2: 'https://picsum.photos/300/200?random=23',
        description: 'A sleek coffee table that complements any space.',
        longDescription: 'This modern coffee table is perfect for smaller living spaces and provides extra storage with a lower shelf.',
        features: ['Minimalist design', 'Lower storage shelf', 'Easy assembly'],
        specifications: { weight: '20 kg', dimensions: '100 x 60 x 45 cm', material: 'Wood and metal', color: 'Black and oak' },
        usageInstructions: 'Avoid excessive moisture.',
        warranty: '1-year warranty.',
        reviews: [{ username: 'Sarah W.', date: '2024-08-05', comment: 'Perfect size for my living room!' }],
        slug: 'modern-coffee-table',
        categories: ['Furniture', 'Living Room'],
        brand: 'Urban Loft',
        colors: [{ name: 'Black', hex: '#000000' }, { name: 'Oak', hex: '#BC8F8F' }, { name: 'White', hex: '#FFFFFF' }, { name: 'Gray', hex: '#B0BEC5' }, { name: 'Espresso', hex: '#3B2F2F' }],
        inStock: true,
        tags: ['coffee table', 'modern', 'storage'],
    },
    {
        id: 4,
        name: 'Linen Sofa',
        price: 450,
        reviewQuantity: 78,
        img1: 'https://picsum.photos/300/200?random=4',
        img2: 'https://picsum.photos/300/200?random=24',
        description: 'A cozy linen sofa for relaxation.',
        longDescription: 'This linen sofa brings comfort and a timeless style to any room with its plush cushions and sturdy frame.',
        features: ['Removable cushion covers', 'High-resilience foam', 'Sturdy frame'],
        specifications: { weight: '40 kg', dimensions: '220 x 90 x 80 cm', material: 'Linen, wood', color: 'Beige' },
        usageInstructions: 'Spot clean or machine wash cushion covers.',
        warranty: '1-year limited warranty.',
        reviews: [{ username: 'Mark T.', date: '2024-09-20', comment: 'Great quality and comfortable.' }],
        slug: 'linen-sofa',
        categories: ['Furniture', 'Living Room'],
        brand: 'Comfort Line',
        colors: [{ name: 'Beige', hex: '#D9C4A1' }, { name: 'Gray', hex: '#808080' }, { name: 'Blue', hex: '#6D98BA' }, { name: 'Green', hex: '#A4C639' }, { name: 'Black', hex: '#000000' }],
        inStock: true,
        tags: ['sofa', 'linen', 'cozy'],
    },
    {
        id: 5,
        name: 'Metal Frame Bed',
        price: 300,
        reviewQuantity: 40,
        img1: 'https://picsum.photos/300/200?random=5',
        img2: 'https://picsum.photos/300/200?random=25',
        description: 'A sturdy metal frame bed for restful sleep.',
        longDescription: 'This bed frame combines modern design with durable construction, providing a stable base for a mattress.',
        features: ['Steel construction', 'Noise-free design', 'Easy assembly'],
        specifications: { weight: '25 kg', dimensions: '200 x 150 x 35 cm', material: 'Steel', color: 'Black' },
        usageInstructions: 'Use a soft cloth for dusting.',
        warranty: '3-year warranty.',
        reviews: [{ username: 'Lucy M.', date: '2024-10-15', comment: 'Strong and easy to set up.' }],
        slug: 'metal-frame-bed',
        categories: ['Furniture', 'Bedroom'],
        brand: 'SteelMaster',
        colors: [{ name: 'Black', hex: '#000000' }, { name: 'White', hex: '#FFFFFF' }, { name: 'Gray', hex: '#808080' }, { name: 'Brown', hex: '#6F4E37' }, { name: 'Navy', hex: '#000080' }],
        inStock: true,
        tags: ['bed frame', 'metal', 'modern'],
    },
    {
        id: 6,
        name: 'Vintage Wood Shelf',
        price: 65,
        reviewQuantity: 94,
        img1: 'https://picsum.photos/300/200?random=6',
        img2: 'https://picsum.photos/300/200?random=26',
        description: 'A rustic shelf with a vintage design.',
        longDescription: 'This vintage-style shelf adds charm and additional storage space to your home.',
        features: ['Solid wood', 'Vintage look', 'Easy installation'],
        specifications: { weight: '10 kg', dimensions: '80 x 30 x 20 cm', material: 'Solid wood', color: 'Walnut' },
        usageInstructions: 'Dust with a dry cloth.',
        warranty: '2-year warranty.',
        reviews: [{ username: 'Amanda S.', date: '2024-09-02', comment: 'Looks beautiful in my room.' }],
        slug: 'vintage-wood-shelf',
        categories: ['Furniture', 'Storage'],
        brand: 'Rustic Charm',
        colors: [{ name: 'Walnut', hex: '#6B4226' }, { name: 'Red', hex: '#FF0000' }, { name: 'White', hex: '#FFFFFF' }, { name: 'Gray', hex: '#B0BEC5' }, { name: 'Espresso', hex: '#3B2F2F' }],
        inStock: true,
        tags: ['shelf', 'vintage', 'rustic'],
    },
    {
        id: 7,
        name: 'Ergonomic Office Chair',
        price: 199,
        reviewQuantity: 67,
        img1: 'https://picsum.photos/300/200?random=7',
        img2: 'https://picsum.photos/300/200?random=27',
        description: 'An ergonomic chair perfect for office work.',
        longDescription: 'This chair is designed to provide maximum support and comfort during long working hours.',
        features: ['Adjustable height', 'Breathable mesh back', 'Lumbar support'],
        specifications: { weight: '12 kg', dimensions: '70 x 70 x 115 cm', material: 'Mesh, metal', color: 'Black' },
        usageInstructions: 'Clean with a damp cloth.',
        warranty: '5-year warranty.',
        reviews: [{ username: 'Chris B.', date: '2024-10-18', comment: 'Great chair for long work hours!' }],
        slug: 'ergonomic-office-chair',
        categories: ['Furniture', 'Office'],
        brand: 'Comfort Work',
        colors: [{ name: 'Black', hex: '#000000' }, { name: 'Gray', hex: '#808080' }, { name: 'Blue', hex: '#4A90E2' }, { name: 'Green', hex: '#8BC34A' }, { name: 'White', hex: '#FFFFFF' }],
        inStock: true,
        tags: ['chair', 'ergonomic', 'office'],
    },
    {
        id: 8,
        name: 'Marble Top Dining Table',
        price: 600,
        reviewQuantity: 23,
        img1: 'https://picsum.photos/300/200?random=8',
        img2: 'https://picsum.photos/300/200?random=28',
        description: 'A luxurious dining table with a marble top.',
        longDescription: 'Elegant and durable, this marble dining table makes a statement in any dining area.',
        features: ['Genuine marble top', 'Seats up to 4 people', 'Modern design'],
        specifications: { weight: '80 kg', dimensions: '150 x 90 x 75 cm', material: 'Marble, metal', color: 'White' },
        usageInstructions: 'Wipe with a soft cloth to clean.',
        warranty: '5-year warranty.',
        reviews: [{ username: 'Sophia R.', date: '2024-08-15', comment: 'Looks stunning!' }],
        slug: 'marble-top-dining-table',
        categories: ['Furniture', 'Dining Room'],
        brand: 'Luxury Homes',
        colors: [{ name: 'White', hex: '#FFFFFF' }, { name: 'Black', hex: '#000000' }, { name: 'Gray', hex: '#B0BEC5' }, { name: 'Green', hex: '#8BC34A' }, { name: 'Brown', hex: '#6F4E37' }],
        inStock: false,
        tags: ['dining table', 'marble', 'luxury'],
    },
    {
        id: 9,
        name: 'LED Desk Lamp',
        price: 40,
        reviewQuantity: 120,
        img1: 'https://picsum.photos/300/200?random=9',
        img2: 'https://picsum.photos/300/200?random=29',
        description: 'A modern LED desk lamp with adjustable brightness.',
        longDescription: 'This energy-efficient LED lamp provides optimal lighting for reading or working.',
        features: ['Touch control', 'Adjustable brightness', 'USB charging port'],
        specifications: { weight: '0.5 kg', dimensions: '20 x 15 x 45 cm', material: 'Plastic', color: 'Black' },
        usageInstructions: 'Clean with a soft, dry cloth.',
        warranty: '1-year warranty.',
        reviews: [{ username: 'Liam K.', date: '2024-10-05', comment: 'Bright and efficient!' }],
        slug: 'led-desk-lamp',
        categories: ['Lighting', 'Office'],
        brand: 'BrightLite',
        colors: [{ name: 'Black', hex: '#000000' }, { name: 'White', hex: '#FFFFFF' }, { name: 'Silver', hex: '#C0C0C0' }, { name: 'Gold', hex: '#FFD700' }, { name: 'Blue', hex: '#4A90E2' }],
        inStock: true,
        tags: ['lamp', 'LED', 'adjustable'],
    },
    {
        id: 10,
        name: 'Leather Recliner Sofa',
        price: 899,
        reviewQuantity: 15,
        img1: 'https://picsum.photos/300/200?random=10',
        img2: 'https://picsum.photos/300/200?random=30',
        description: 'A luxurious leather recliner sofa.',
        longDescription: 'This recliner sofa combines comfort and style with premium leather upholstery.',
        features: ['Reclining feature', 'Genuine leather', 'Durable frame'],
        specifications: { weight: '70 kg', dimensions: '220 x 95 x 90 cm', material: 'Leather, wood', color: 'Brown' },
        usageInstructions: 'Wipe with a leather cleaner.',
        warranty: '5-year warranty.',
        reviews: [{ username: 'Aaron S.', date: '2024-09-30', comment: 'Worth every penny!' }],
        slug: 'leather-recliner-sofa',
        categories: ['Furniture', 'Living Room'],
        brand: 'Premium Comfort',
        colors: [{ name: 'Brown', hex: '#6F4E37' }, { name: 'Black', hex: '#000000' }, { name: 'Gray', hex: '#808080' }, { name: 'Beige', hex: '#D9C4A1' }, { name: 'Dark Blue', hex: '#001F3F' }],
        inStock: true,
        tags: ['sofa', 'recliner', 'leather'],
    },
    {
        id: 11,
        name: 'Stainless Steel Kitchen Rack',
        price: 75,
        reviewQuantity: 45,
        img1: 'https://picsum.photos/300/200?random=11',
        img2: 'https://picsum.photos/300/200?random=31',
        description: 'A sturdy kitchen rack made of stainless steel.',
        longDescription: 'This kitchen rack offers extra storage for kitchen essentials with a durable steel construction.',
        features: ['Rust-resistant', 'Easy to clean', 'Compact design'],
        specifications: { weight: '5 kg', dimensions: '60 x 30 x 40 cm', material: 'Stainless steel', color: 'Silver' },
        usageInstructions: 'Wipe with a damp cloth to clean.',
        warranty: '2-year warranty.',
        reviews: [{ username: 'Nina P.', date: '2024-10-10', comment: 'Very practical for kitchen storage!' }],
        slug: 'stainless-steel-kitchen-rack',
        categories: ['Storage', 'Kitchen'],
        brand: 'Chef Essentials',
        colors: [{ name: 'Silver', hex: '#C0C0C0' }, { name: 'Black', hex: '#000000' }],
        inStock: true,
        tags: ['kitchen', 'rack', 'storage'],
    },
    {
        id: 12,
        name: 'Portable Electric Heater',
        price: 50,
        reviewQuantity: 78,
        img1: 'https://picsum.photos/300/200?random=12',
        img2: 'https://picsum.photos/300/200?random=32',
        description: 'A compact electric heater perfect for small rooms.',
        longDescription: 'This electric heater quickly warms up your space, perfect for chilly days.',
        features: ['Adjustable temperature', 'Portable', 'Safety auto-shutoff'],
        specifications: { weight: '2 kg', dimensions: '25 x 15 x 20 cm', material: 'Plastic', color: 'White' },
        usageInstructions: 'Use on a flat surface. Unplug when not in use.',
        warranty: '1-year warranty.',
        reviews: [{ username: 'James R.', date: '2024-09-20', comment: 'Heats up quickly!' }],
        slug: 'portable-electric-heater',
        categories: ['Home Appliances', 'Heating'],
        brand: 'WarmHome',
        colors: [{ name: 'White', hex: '#FFFFFF' }, { name: 'Black', hex: '#000000' }],
        inStock: true,
        tags: ['heater', 'electric', 'portable'],
    },
    {
        id: 13,
        name: 'Glass Coffee Table',
        price: 150,
        reviewQuantity: 33,
        img1: 'https://picsum.photos/300/200?random=13',
        img2: 'https://picsum.photos/300/200?random=33',
        description: 'A modern glass coffee table with a sleek design.',
        longDescription: 'This stylish coffee table is ideal for modern living rooms, featuring a glass top and metal frame.',
        features: ['Tempered glass', 'Minimalist design', 'Easy assembly'],
        specifications: { weight: '15 kg', dimensions: '100 x 50 x 40 cm', material: 'Glass, metal', color: 'Clear' },
        usageInstructions: 'Clean with glass cleaner.',
        warranty: '2-year warranty.',
        reviews: [{ username: 'Olivia L.', date: '2024-08-05', comment: 'Beautiful and sturdy.' }],
        slug: 'glass-coffee-table',
        categories: ['Furniture', 'Living Room'],
        brand: 'Modern Life',
        colors: [{ name: 'Clear', hex: '#F5F5F5' }, { name: 'Black', hex: '#000000' }, { name: 'Gold', hex: '#FFD700' }],
        inStock: false,
        tags: ['coffee table', 'glass', 'modern'],
    },
    {
        id: 14,
        name: 'Memory Foam Mattress',
        price: 400,
        reviewQuantity: 82,
        img1: 'https://picsum.photos/300/200?random=14',
        img2: 'https://picsum.photos/300/200?random=34',
        description: 'A comfortable memory foam mattress.',
        longDescription: 'This mattress provides excellent support with high-density memory foam for restful sleep.',
        features: ['Memory foam', 'Anti-allergenic', 'Breathable cover'],
        specifications: { weight: '20 kg', dimensions: '200 x 150 x 20 cm', material: 'Foam', color: 'White' },
        usageInstructions: 'Rotate periodically for even wear.',
        warranty: '10-year warranty.',
        reviews: [{ username: 'Lucas M.', date: '2024-09-01', comment: 'Super comfortable!' }],
        slug: 'memory-foam-mattress',
        categories: ['Bedding', 'Bedroom'],
        brand: 'SleepWell',
        colors: [{ name: 'White', hex: '#FFFFFF' }, { name: 'Gray', hex: '#B0BEC5' }],
        inStock: true,
        tags: ['mattress', 'foam', 'bed'],
    },
    {
        id: 15,
        name: 'Wall-Mounted Bookshelf',
        price: 80,
        reviewQuantity: 58,
        img1: 'https://picsum.photos/300/200?random=15',
        img2: 'https://picsum.photos/300/200?random=35',
        description: 'A stylish wall-mounted bookshelf.',
        longDescription: 'This shelf is perfect for displaying books and decorative items in any room.',
        features: ['Easy wall mounting', 'Modern design', 'Space-saving'],
        specifications: { weight: '4 kg', dimensions: '90 x 25 x 20 cm', material: 'Wood', color: 'Natural' },
        usageInstructions: 'Mount securely to wall studs.',
        warranty: '3-year warranty.',
        reviews: [{ username: 'Sophia W.', date: '2024-10-12', comment: 'Looks amazing on my wall.' }],
        slug: 'wall-mounted-bookshelf',
        categories: ['Furniture', 'Storage'],
        brand: 'HomeSpace',
        colors: [{ name: 'Natural', hex: '#A0522D' }, { name: 'White', hex: '#FFFFFF' }, { name: 'Black', hex: '#000000' }],
        inStock: true,
        tags: ['bookshelf', 'wall-mounted', 'storage'],
    },
    {
        id: 16,
        name: 'Compact Kitchen Mixer',
        price: 120,
        reviewQuantity: 90,
        img1: 'https://picsum.photos/300/200?random=16',
        img2: 'https://picsum.photos/300/200?random=36',
        description: 'A compact mixer for all your baking needs.',
        longDescription: 'This mixer is ideal for small kitchens and has multiple speed settings for versatile use.',
        features: ['Multiple speeds', 'Compact size', 'Easy to clean'],
        specifications: { weight: '3 kg', dimensions: '25 x 15 x 25 cm', material: 'Plastic, metal', color: 'White' },
        usageInstructions: 'Wash attachments after each use.',
        warranty: '1-year warranty.',
        reviews: [{ username: 'Emma T.', date: '2024-10-04', comment: 'Perfect for my kitchen!' }],
        slug: 'compact-kitchen-mixer',
        categories: ['Kitchen Appliances', 'Small Appliances'],
        brand: 'MixMaster',
        colors: [{ name: 'White', hex: '#FFFFFF' }, { name: 'Silver', hex: '#C0C0C0' }],
        inStock: true,
        tags: ['mixer', 'kitchen', 'compact'],
    },
    {
        id: 17,
        name: 'Outdoor Fire Pit',
        price: 200,
        reviewQuantity: 25,
        img1: 'https://picsum.photos/300/200?random=17',
        img2: 'https://picsum.photos/300/200?random=37',
        description: 'A durable fire pit for outdoor gatherings.',
        longDescription: 'This fire pit is great for outdoor warmth and ambiance, built to withstand the elements.',
        features: ['Heat resistant', 'Sturdy design', 'Portable'],
        specifications: { weight: '15 kg', dimensions: '80 x 80 x 50 cm', material: 'Steel', color: 'Black' },
        usageInstructions: 'Use on fire-resistant surfaces only.',
        warranty: '1-year warranty.',
        reviews: [{ username: 'Jack L.', date: '2024-08-15', comment: 'Love using this for family gatherings!' }],
        slug: 'outdoor-fire-pit',
        categories: ['Outdoor', 'Heating'],
        brand: 'FireMaster',
        colors: [{ name: 'Black', hex: '#000000' }, { name: 'Gray', hex: '#808080' }],
        inStock: false,
        tags: ['fire pit', 'outdoor', 'heating'],
    },
    {
        id: 18,
        name: 'Standing Mirror',
        price: 85,
        reviewQuantity: 12,
        img1: 'https://picsum.photos/300/200?random=18',
        img2: 'https://picsum.photos/300/200?random=38',
        description: 'A full-length standing mirror with a sleek frame.',
        longDescription: 'This mirror adds a touch of elegance and practicality to any room.',
        features: ['Full-length', 'Stable frame', 'Lightweight'],
        specifications: { weight: '7 kg', dimensions: '180 x 60 x 3 cm', material: 'Glass, metal', color: 'Silver' },
        usageInstructions: 'Clean with glass cleaner.',
        warranty: '1-year warranty.',
        reviews: [{ username: 'Daisy F.', date: '2024-09-21', comment: 'Looks stunning in my room.' }],
        slug: 'standing-mirror',
        categories: ['Decor', 'Bedroom'],
        brand: 'Reflections',
        colors: [{ name: 'Silver', hex: '#C0C0C0' }, { name: 'Black', hex: '#000000' }],
        inStock: true,
        tags: ['mirror', 'standing', 'full-length'],
    },
    {
        id: 19,
        name: 'Wireless Speaker',
        price: 60,
        reviewQuantity: 98,
        img1: 'https://picsum.photos/300/200?random=19',
        img2: 'https://picsum.photos/300/200?random=39',
        description: 'A compact wireless speaker with high-quality sound.',
        longDescription: 'This portable speaker offers excellent sound quality and Bluetooth connectivity.',
        features: ['Bluetooth connectivity', 'Rechargeable battery', 'Compact size'],
        specifications: { weight: '0.5 kg', dimensions: '10 x 10 x 5 cm', material: 'Plastic', color: 'Blue' },
        usageInstructions: 'Charge fully before first use.',
        warranty: '1-year warranty.',
        reviews: [{ username: 'Ethan P.', date: '2024-10-09', comment: 'Great sound quality!' }],
        slug: 'wireless-speaker',
        categories: ['Audio', 'Portable'],
        brand: 'SoundMax',
        colors: [{ name: 'Blue', hex: '#4A90E2' }, { name: 'Black', hex: '#000000' }, { name: 'Red', hex: '#FF0000' }],
        inStock: true,
        tags: ['speaker', 'wireless', 'bluetooth'],
    },
    {
        id: 20,
        name: 'Modern Floor Lamp',
        price: 110,
        reviewQuantity: 43,
        img1: 'https://picsum.photos/300/200?random=20',
        img2: 'https://picsum.photos/300/200?random=40',
        description: 'A modern floor lamp to light up your room.',
        longDescription: 'This floor lamp provides warm light and complements contemporary decor.',
        features: ['LED bulb included', 'Stable base', 'Adjustable height'],
        specifications: { weight: '4 kg', dimensions: '170 x 30 x 30 cm', material: 'Metal', color: 'Gold' },
        usageInstructions: 'Wipe with a soft cloth.',
        warranty: '2-year warranty.',
        reviews: [{ username: 'Mia Z.', date: '2024-10-16', comment: 'Love the modern look!' }],
        slug: 'modern-floor-lamp',
        categories: ['Lighting', 'Living Room'],
        brand: 'BrightLite',
        colors: [{ name: 'Gold', hex: '#FFD700' }, { name: 'Silver', hex: '#C0C0C0' }, { name: 'Black', hex: '#000000' }],
        inStock: true,
        tags: ['floor lamp', 'modern', 'lighting'],
    }
];





const links = [
    {
        name: `Shop`, link: '/shop', subMenu: false,
        children: [
            {
                head: "Topwear",
                subLink: [
                    { name: 'T-shirts', link: '/mens/topwear/tshirts' },
                    { name: 'Shirts', link: '/mens/topwear/shirts' },
                    { name: 'Jackets', link: '/mens/topwear/jackets' },
                    { name: 'Sweaters', link: '/mens/topwear/sweaters' },
                    { name: 'Hoodies', link: '/mens/topwear/hoodies' },
                ]
            },
            {
                head: "Bottomwear",
                subLink: [
                    { name: 'Jeans', link: '/mens/bottomwear/jeans' },
                    { name: 'Trousers', link: '/mens/bottomwear/trousers' },
                    { name: 'Shorts', link: '/mens/bottomwear/shorts' },
                ]
            },
            {
                head: "Footwear",
                subLink: [
                    { name: 'Sneakers', link: '/mens/footwear/sneakers' },
                    { name: 'Formal Shoes', link: '/mens/footwear/formal-shoes' },
                    { name: 'Sandals', link: '/mens/footwear/sandals' },
                ]
            }
        ]
    },
    {
        name: `Product`, link: '/product', subMenu: false,
        children: [
            {
                head: "Topwear",
                subLink: [
                    { name: 'Tops', link: '/womens/topwear/tops' },
                    { name: 'Blouses', link: '/womens/topwear/blouses' },
                    { name: 'Dresses', link: '/womens/topwear/dresses' },
                ]
            },
            {
                head: "Bottomwear",
                subLink: [
                    { name: 'Skirts', link: '/womens/bottomwear/skirts' },
                    { name: 'Pants', link: '/womens/bottomwear/pants' },
                ]
            },
            {
                head: "Footwear",
                subLink: [
                    { name: 'Flats', link: '/womens/footwear/flats' },
                    { name: 'Heels', link: '/womens/footwear/heels' },
                    { name: 'Boots', link: '/womens/footwear/boots' },
                ]
            }
        ]
    },
    {
        name: `Pages`, link: '/pages', subMenu: false,
        children: [
            {
                head: "Boys",
                subLink: [
                    { name: 'T-shirts', link: '/kids/boys/tshirts' },
                    { name: 'Pants', link: '/kids/boys/pants' },
                ]
            },
            {
                head: "Girls",
                subLink: [
                    { name: 'Dresses', link: '/kids/girls/dresses' },
                    { name: 'Skirts', link: '/kids/girls/skirts' },
                ]
            },
            {
                head: "Footwear",
                subLink: [
                    { name: 'Sneakers', link: '/kids/footwear/sneakers' },
                    { name: 'Sandals', link: '/kids/footwear/sandals' },
                ]
            }
        ]
    },
    {
        name: `Blog`, link: '/blog', subMenu: false,
        children: [
            {
                head: "Boys",
                subLink: [
                    { name: 'T-shirts', link: '/kids/boys/tshirts' },
                    { name: 'Pants', link: '/kids/boys/pants' },
                ]
            },
            {
                head: "Girls",
                subLink: [
                    { name: 'Dresses', link: '/kids/girls/dresses' },
                    { name: 'Skirts', link: '/kids/girls/skirts' },
                ]
            },
            {
                head: "Footwear",
                subLink: [
                    { name: 'Sneakers', link: '/kids/footwear/sneakers' },
                    { name: 'Sandals', link: '/kids/footwear/sandals' },
                ]
            }
        ]
    },
];


const arrivalProducts = [
    {
        img1: '15_ZZPlant_1.webp',
        img2: '15_ZZPlant_2.webp',
        name: 'ZZ Plant',
        rating: '5 out of 5',
        price: '230'
    },
    {
        img1: '15_ZZPlant_1.webp',
        img2: '15_ZZPlant_2.webp',
        name: 'ZZ Plant',
        rating: '5 out of 5',
        price: '230'
    },
    {
        img1: '15_ZZPlant_1.webp',
        img2: '15_ZZPlant_2.webp',
        name: 'ZZ Plant',
        rating: '5 out of 5',
        price: '230'
    },
    {
        img1: '15_ZZPlant_1.webp',
        img2: '15_ZZPlant_2.webp',
        name: 'ZZ Plant',
        rating: '5 out of 5',
        price: '230'
    },
    {
        img1: '15_ZZPlant_1.webp',
        img2: '15_ZZPlant_2.webp',
        name: 'ZZ Plant',
        rating: '5 out of 5',
        price: '230'
    },
    {
        img1: '15_ZZPlant_1.webp',
        img2: '15_ZZPlant_2.webp',
        name: 'ZZ Plant',
        rating: '5 out of 5',
        price: '230'
    },
    {
        img1: '15_ZZPlant_1.webp',
        img2: '15_ZZPlant_2.webp',
        name: 'ZZ Plant',
        rating: '5 out of 5',
        price: '230'
    },
    {
        img1: '15_ZZPlant_1.webp',
        img2: '15_ZZPlant_2.webp',
        name: 'ZZ Plant',
        rating: '5 out of 5',
        price: '230'
    },
    {
        img1: '15_ZZPlant_1.webp',
        img2: '15_ZZPlant_2.webp',
        name: 'ZZ Plant',
        rating: '5 out of 5',
        price: '230'
    },
    {
        img1: '15_ZZPlant_1.webp',
        img2: '15_ZZPlant_2.webp',
        name: 'ZZ Plant',
        rating: '5 out of 5',
        price: '230'
    },
];



const topTrandingProducts = [
    {
        img1: '12_CornstalkDracaena_1.webp',
        img2: '12_CornstalkDracaena_2.webp',
        name: 'Cornstalk Dracaena',
        rating: '5 out of 5',
        price: '230'
    },
    {
        img1: '12_CornstalkDracaena_1.webp',
        img2: '12_CornstalkDracaena_2.webp',
        name: 'Cornstalk Dracaena',
        rating: '5 out of 5',
        price: '230'
    },
    {
        img1: '12_CornstalkDracaena_1.webp',
        img2: '12_CornstalkDracaena_2.webp',
        name: 'Cornstalk Dracaena',
        rating: '5 out of 5',
        price: '230'
    },
    {
        img1: '12_CornstalkDracaena_1.webp',
        img2: '12_CornstalkDracaena_2.webp',
        name: 'Cornstalk Dracaena',
        rating: '5 out of 5',
        price: '230'
    },
    {
        img1: '12_CornstalkDracaena_1.webp',
        img2: '12_CornstalkDracaena_2.webp',
        name: 'Cornstalk Dracaena',
        rating: '5 out of 5',
        price: '230'
    },
    {
        img1: '12_CornstalkDracaena_1.webp',
        img2: '12_CornstalkDracaena_2.webp',
        name: 'Cornstalk Dracaena',
        rating: '5 out of 5',
        price: '230'
    },
    {
        img1: '12_CornstalkDracaena_1.webp',
        img2: '12_CornstalkDracaena_2.webp',
        name: 'Cornstalk Dracaena',
        rating: '5 out of 5',
        price: '230'
    },
    {
        img1: '12_CornstalkDracaena_1.webp',
        img2: '12_CornstalkDracaena_2.webp',
        name: 'Cornstalk Dracaena',
        rating: '5 out of 5',
        price: '230'
    },
    {
        img1: '12_CornstalkDracaena_1.webp',
        img2: '12_CornstalkDracaena_2.webp',
        name: 'Cornstalk Dracaena',
        rating: '5 out of 5',
        price: '230'
    },
    {
        img1: '12_CornstalkDracaena_1.webp',
        img2: '12_CornstalkDracaena_2.webp',
        name: 'Cornstalk Dracaena',
        rating: '5 out of 5',
        price: '230'
    },
];

const blogInfo = [
    {
        img1: '3_297a37dd-b9e2-473f-ac8b-a52858b6f668.webp',
        name: 'Plants',
        title: 'How to Care for Your ZZ Plant',
        author: 'Posted by Alo Support'
    },
    {
        img1: '2_7a80b7e5-8551-4976-926f-0c53836b4a25.webp',
        name: 'Pothos',
        title: '5 Easy Steps to Keep Your Pothos Thriving',
        author: 'Posted by Alo Support'
    },
    {
        img1: '1_43d5392f-3db4-41c2-9da8-86ce90cbf6fe.webp',
        name: 'Snake Plant',
        title: 'The Ultimate Guide to Snake Plant Care',
        author: 'Posted by Alo Support'
    },
    {
        img1: '18_SpiderPlant_2.webp',
        name: 'Spider Plant',
        title: 'Spider Plant: Benefits and Care Tips',
        author: 'Posted by Alo Support'
    },
    {
        img1: '19_FiddleLeafFig_2.webp',
        name: 'Fiddle Leaf Fig',
        title: 'Caring for Your Fiddle Leaf Fig: A Complete Guide',
        author: 'Posted by Alo Support'
    },
    {
        img1: '20_Succulents_2.webp',
        name: 'Succulents',
        title: 'Succulent Care: Tips for a Lush Garden',
        author: 'Posted by Alo Support'
    },
    {
        img1: '21_RubberPlant_2.webp',
        name: 'Rubber Plant',
        title: 'Everything You Need to Know About Rubber Plants',
        author: 'Posted by Alo Support'
    },
    {
        img1: '22_Cactus_2.webp',
        name: 'Cactus',
        title: 'Cactus Care: How to Keep Your Cactus Happy',
        author: 'Posted by Alo Support'
    },
    {
        img1: '23_PeaceLily_2.webp',
        name: 'Peace Lily',
        title: 'Peace Lily: A Beautiful Addition to Your Home',
        author: 'Posted by Alo Support'
    },
    {
        img1: '24_Sansevieria_2.webp',
        name: 'Sansevieria',
        title: 'Sansevieria: The Hardy Houseplant You Need',
        author: 'Posted by Alo Support'
    },
];


const instaImg = [
    { id: 1, image: "https://picsum.photos/200/300?random=1" },
    { id: 2, image: "https://picsum.photos/200/300?random=2" },
    { id: 3, image: "https://picsum.photos/200/300?random=3" },
    { id: 4, image: "https://picsum.photos/200/300?random=4" },
    { id: 5, image: "https://picsum.photos/200/300?random=5" },
    { id: 6, image: "https://picsum.photos/200/300?random=6" },
    { id: 7, image: "https://picsum.photos/200/300?random=7" },
    { id: 8, image: "https://picsum.photos/200/300?random=8" },
    { id: 9, image: "https://picsum.photos/200/300?random=9" },
    { id: 10, image: "https://picsum.photos/200/300?random=10" }
];




export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};



export { products, links, arrivalProducts, topTrandingProducts, blogInfo, instaImg };


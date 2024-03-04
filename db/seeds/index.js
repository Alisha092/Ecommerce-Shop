const mongoose = require('mongoose');
require('dotenv').config();

const Product = require('../models/product');
const Purchase = require('../models/purchase');
const User = require('../models/user');
const Review = require('../models/review');
const connectToDB = require('../db');

connectToDB();

const seedDB = async () => {
    try {
        await Product.deleteMany({})
        await Purchase.deleteMany({})
        await User.deleteMany({})
        await Review.deleteMany({})

        const products = [
            { name: 'گوشی موبایل سامسونگ', price: 20000000, category: 'الکترونیک', stockQuantity: 15, description: 'گوشی هوشمند با قابلیت‌های بالا', image: 'url-to-image' },
            { name: 'لپ تاپ ایسوس', price: 40000000, category: 'الکترونیک', stockQuantity: 10, description: 'مناسب برای برنامه نویسی و طراحی', image: 'url-to-image' },
            { name: 'هدفون بی سیم', price: 5000000, category: 'لوازم جانبی', stockQuantity: 20, description: 'کیفیت صدای عالی و باتری با دوام', image: 'url-to-image' },
            { name: 'کتاب آموزش جاوا اسکریپت', price: 1500000, category: 'کتاب', stockQuantity: 30, description: 'مناسب برای تمامی سطوح', image: 'url-to-image' },
            { name: 'ماوس بی سیم لاجیتک', price: 2000000, category: 'لوازم جانبی', stockQuantity: 25, description: 'راحتی و دقت بالا در استفاده', image: 'url-to-image' },
            { name: 'صندلی گیمینگ', price: 10000000, category: 'مبلمان', stockQuantity: 5, description: 'راحتی استثنایی برای بازی و کار', image: 'url-to-image' },
            { name: 'کیبورد مکانیکی', price: 7000000, category: 'لوازم جانبی', stockQuantity: 20, description: 'بازخورد عالی و دوام بالا', image: 'url-to-image' },
            { name: 'پد موس گیمینگ', price: 500000, category: 'لوازم جانبی', stockQuantity: 40, description: 'سطحی صاف و دقیق برای حرکت موس', image: 'url-to-image' },
            { name: 'گوشی موبایل اپل آیفون 12', price: 30000000, category: 'الکترونیک', stockQuantity: 10, description: 'تکنولوژی و طراحی پیشرفته', image: 'url-to-image' },
            { name: 'دوربین عکاسی کانن', price: 25000000, category: 'الکترونیک', stockQuantity: 7, description: 'کیفیت تصویر برتر و کاربری آسان', image: 'url-to-image' },
            { name: 'تبلت سامسونگ گلکسی تب', price: 18000000, category: 'الکترونیک', stockQuantity: 12, description: 'مناسب برای خواندن و وبگردی', image: 'url-to-image' },
            { name: 'ساعت هوشمند', price: 9000000, category: 'لوازم جانبی', stockQuantity: 20, description: 'همراهی هوشمند برای سلامتی و فعالیت‌های روزانه', image: 'url-to-image' },
            { name: 'هارد اکسترنال 1TB', price: 4000000, category: 'لوازم جانبی', stockQuantity: 15, description: 'فضای ذخیره‌سازی امن و قابل حمل', image: 'url-to-image' },
            { name: 'رم کامپیوتر DDR4 8GB', price: 2000000, category: 'قطعات کامپیوتر', stockQuantity: 25, description: 'افزایش سرعت و کارایی سیستم', image: 'url-to-image' },
            { name: 'مانیتور گیمینگ 27 اینچ', price: 12000000, category: 'الکترونیک', stockQuantity: 8, description: 'نمایش فوق‌العاده با تاخیر کم', image: 'url-to-image' },
            { name: 'فلش مموری 64GB', price: 600000, category: 'لوازم جانبی', stockQuantity: 50, description: 'انتقال داده سریع و قابل اطمینان', image: 'url-to-image' },
            { name: 'اسپیکر بلوتوثی', price: 3000000, category: 'لوازم جانبی', stockQuantity: 20, description: 'صدای با کیفیت و قابلیت حمل آسان', image: 'url-to-image' },
            { name: 'کاور گوشی موبایل', price: 200000, category: 'لوازم جانبی', stockQuantity: 100, description: 'محافظت از گوشی شما با طراحی زیبا', image: 'url-to-image' },
            { name: 'شارژر فندکی ماشین', price: 250000, category: 'لوازم جانبی', stockQuantity: 30, description: 'شارژ سریع گوشی هنگام رانندگی', image: 'url-to-image' },
            { name: 'کیف لپ تاپ', price: 1500000, category: 'لوازم جانبی', stockQuantity: 25, description: 'محافظت و حمل آسان لپ تاپ', image: 'url-to-image' },
        ];

        await Product.insertMany(products);
        console.log('Database seeded successfully');

    } catch (error) {
        console.error('Seed error:', error.message);
        process.exit(1); // Exit process with failure
    }
};


seedDB();
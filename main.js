let box = document.querySelector(".box")
box.innerHTML+=`
 <div class="text-center bg-black text-white p-2 text-sm">
        <p>Бесплатная доставка по Душанбе от 500 сомони · Возврат 30 дней</p>
    </div>

    <div class="flex items-center justify-between p-3">
        <div class="flex items-center">
            <p class="text-[30px] mr-[65px] font-bold">QADAM</p>
            <ul class="flex gap-4 text-[14px]">
                <li>Мужчинам</li>
                <li>Женщинам</li>
                <li>Детям</li>
                <li>Распродажа</li>
            </ul>
        </div>
        <p class="font-bold text-[14px]">Корзина (2)</p>
    </div>

    <div class="h-[350px] relative px-8">
        <img class="w-full h-full rounded-[25px] object-cover brightness-75" src="./images/1.jpg" alt="">

        <div class="absolute top-0 left-0 w-full h-full z-10 pl-12 pt-10">
            <p class="text-green-300 text-[14px] font-bold">НОВАЯ КОЛЛЕКЦИЯ</p>
            <p class="text-white text-[48px] font-bold my-4 leading-tight">ДВИГАЙСЯ<br>ЛЕГКО</p>
            <p class="text-gray-300 text-[13px]">
                Лёгкие кроссовки на каждый день. Скидки до 30% на <br>
                прошлый сезон.
            </p>
        </div>
    </div>

    <section class="px-8 py-6">

        <div class="flex justify-between items-center mb-5">
            <h2 class="text-[24px] font-bold">ПОПУЛЯРНОЕ</h2>
            <p class="text-gray-400 text-[13px]">4 модели</p>
        </div>

        <div class="grid grid-cols-4 gap-5">

            <div>
                <div class="relative bg-red-600 h-[230px]">
                    <span class="absolute top-2 left-2 bg-white px-2 py-1 text-xs font-bold">-30%</span>
                    <img src="./images/2.jpg" class="w-full h-full object-cover">
                </div>
                <h3 class="font-bold text-[15px] mt-2">Runner Red</h3>
                <p class="text-gray-400 text-[12px] mt-1">Беговые · 3 цвета</p>
                <p class="font-bold text-[16px] mt-2">690 с.</p>
            </div>

            <div>
                <div class="relative bg-yellow-500 h-[230px]">
                    <span class="absolute top-2 left-2 bg-white px-2 py-1 text-xs font-bold">Новинка</span>
                    <img src="./images/3.jpg" class="w-full h-full object-cover">
                </div>
                <h3 class="font-bold text-[15px] mt-2">Street Low</h3>
                <p class="text-gray-400 text-[12px] mt-1">Повседневные · 5 цветов</p>
                <p class="font-bold text-[16px] mt-2">540 с.</p>
            </div>

            <div>
                <div class="relative bg-black h-[230px]">
                    <img src="./images/5.jpg" class="w-full h-full object-cover">
                </div>
                <h3 class="font-bold text-[15px] mt-2">Trail Pro</h3>
                <p class="text-gray-400 text-[12px] mt-1">Для хайкинга · 2 цвета</p>
                <p class="font-bold text-[16px] mt-2">820 с.</p>
            </div>

            <div>
                <div class="relative bg-lime-400 h-[230px]">
                    <span class="absolute top-2 left-2 bg-white px-2 py-1 text-xs font-bold">Новинка</span>
                    <img src="./images/4.jpg" class="w-full h-full object-cover">
                </div>
                <h3 class="font-bold text-[15px] mt-2">Air Light</h3>
                <p class="text-gray-400 text-[12px] mt-1">Беговые · 4 цвета</p>
                <p class="font-bold text-[16px] mt-2">750 с.</p>
            </div>

        </div>
    </section>

    <footer class="bg-[#171717] text-gray-400 px-8 py-6 text-sm">
        <p>© 2026 QADAM · Душанбе, ТЦ «Сиёма Молл», 2 этаж</p>
    </footer>
`
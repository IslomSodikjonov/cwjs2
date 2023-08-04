// * // ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let successful = []

let unSuccessful = []

let taxes = 0

let taxesMax = {}

let taxesMin = {}

// * // Реальные данные 2021*

let bank = [

    {

        name: 'Apple',

        budget: 1000000,

        tax: 28,

        expensesPerYear: [

            {
                title: 'Salaries',
                total: 125000
            },

            {
                title: 'Utilites',
                total: 18000,
            },

            {
                title: 'Rent',
                total: 258000
            }

        ]

    },

    {

        name: 'Microsoft',

        budget: 988000,

        tax: 21,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 148000

            },

            {

                title: 'Utilites',

                total: 124000,

            },

            {

                title: 'Rent',

                total: 314000

            }

        ]

    },

    {

        name: 'HP',

        budget: 609000,

        tax: 14,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 414000

            },

            {

                title: 'Utilites',

                total: 19000,

            },

            {

                title: 'Rent',

                total: 114400

            }

        ]

    },

    {

        name: 'Xiomi',

        budget: 889500,

        tax: 17,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 318000

            },

            {

                title: 'Utilites',

                total: 14000,

            },

            {

                title: 'Rent',

                total: 169000

            }

        ]

    },

    {

        name: 'Samsung',

        budget: 889500,

        tax: 12,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 650400

            },

            {

                title: 'Utilites',

                total: 29000,

            },

            {

                title: 'Rent',

                total: 212000

            }

        ]

    },

]

// * // 1. Высчитать месячные траты, создав ключ expensesPerMonth в объектах*

// * // 2. Высчитать отношение трат в месяц к месячному бюджету в процентах, создав ключ procent в объектах. Например компания в месяц зарабатывает 100,000, а тратит 25,000, значит ее ключ procent = 25%*

// * // 3. Сохранить successful и unsuccessful и добавить туда фирмы, вычитав налог tax*

// * // 4. Сохранить в переменной taxes общее количество налогов со всех компаний. Например все платят по 20,000 в месяц. В итоге taxes = 100,000*

// * // 5. Сохранить в переменных taxesMax и taxesMin те, компанию которая больше и меньше всех платит налоги*

// * // 6. Добавить ключ totalMoney в каждой компании. Эта переменная показывает сколько в итоге осталось денег в компании после вычета всех налогов и трат*

// * // * Писать весь код в функции `setup()`*

// * // ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

const setup = () => {

    for(let item of bank) { 
        // Task 1
        item.expensesPerMonth = 0

        for(let allExpences of item.expensesPerYear) {
            item.expensesPerMonth += (allExpences.total / 12)
        }
        item.expensesPerMonth = Math.round(item.expensesPerMonth)
        // console.log(item.expensesPerMonth);


        // Task 2
        item.procent = Math.round((item.expensesPerMonth * 100) / (item.budget / 12))
        // console.log(item.procent);


        // Task 3
        item.allTax = Math.round((item.budget / 12) / 100 * item.tax)
        
        let profits = Math.round((item.budget / 12) - (item.allTax + item.expensesPerMonth))
        // console.log(profits);

        if(profits > 0) {
            successful.push(item.name)
        } else {
            unSuccessful.push(item.name)
        }


        // Task 4 
        taxes += item.allTax

        
        // Task 6
        item.totalMoney = Math.round((item.budget / 12) - item.expensesPerMonth - item.allTax)
        console.log(item.totalMoney);
    }
    
    // Task 5
    taxesMax = bank.reduce((a, b) => {
        if(a.allTax > b.allTax) {
            return a
        } else {
            return b
        }
    })

    taxesMin = bank.reduce((a, b) => {
        if(a.allTax < b.allTax) {
            return a
        } else {
            return b
        }
    })
    
    console.log(taxesMax);    
    console.log(taxesMin);          
    console.log(taxes);
    console.log(successful);
    console.log(unSuccessful);



}

setup()
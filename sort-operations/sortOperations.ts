type TProps = {
  [key in string]: string;
} & {
  date: string;
  amount: string;
};

const getYearString = (date: string): string => {
  return date.slice(0, 4);
};

const getDateString = (date: string): string => {
  return date.slice(5, date.length);
};

function sortOperations(arr: TProps[]): Map<string, string[]> {
  const result = new Map();

  arr
    .sort(
      (a, b) => Number(getDateString(a.date)) - Number(getDateString(b.date))
    )
    .forEach(item => {
      if (result.has(getYearString(item.date))) {
        result.set(getYearString(item.date), [
          ...result.get(getYearString(item.date)),
          getDateString(item.date),
        ]);

        return;
      }

      result.set(getYearString(item.date), [getDateString(item.date)]);
    });

  return result;
}

const operations: TProps[] = [
  {
    date: '2022-01-15',
    amount: '12500',
    comment: 'Зарплата',
    category: 'Доходы',
    currency: 'RUB',
  },
  {
    date: '2025-02-03',
    amount: '5499',
    comment: 'Ноутбук',
    category: 'Техника',
    recipient: 'DNS',
  },
  {
    date: '2022-03-12',
    amount: '3200.50',
    comment: 'Продукты',
    category: 'Еда',
  },
  {
    date: '2022-04-22',
    amount: '1500',
    comment: 'Такси',
    category: 'Транспорт',
  },
  {
    date: '2022-05-05',
    amount: '7800',
    comment: 'Одежда',
    category: 'Шопинг',
    recipient: 'Zara',
  },
  {
    date: '2024-06-18',
    amount: '2300',
    comment: 'Ресторан',
    category: 'Развлечения',
  },
  {
    date: '2022-07-30',
    amount: '12000',
    comment: 'Аренда',
    category: 'Жилье',
  },
  {
    date: '2020-08-14',
    amount: '450.75',
    comment: 'Кино',
    category: 'Развлечения',
  },
  {
    date: '2022-09-01',
    amount: '6500',
    comment: 'Ремонт',
    category: 'Дом',
  },
  {
    date: '2022-10-21',
    amount: '890',
    comment: 'Книги',
    category: 'Образование',
  },
  {
    date: '2023-01-10',
    amount: '13500',
    comment: 'Зарплата',
    category: 'Доходы',
    currency: 'RUB',
  },
  {
    date: '2023-02-07',
    amount: '12000',
    comment: 'Смартфон',
    category: 'Техника',
    recipient: 'М.Видео',
  },
  {
    date: '2023-03-15',
    amount: '2800.20',
    comment: 'Продукты',
    category: 'Еда',
  },
  {
    date: '2023-04-05',
    amount: '1800',
    comment: 'Такси в аэропорт',
    category: 'Транспорт',
  },
  {
    date: '2023-05-22',
    amount: '9200',
    comment: 'Обувь',
    category: 'Шопинг',
    recipient: 'Adidas',
  },
  {
    date: '2021-06-11',
    amount: '3100',
    comment: 'Ужин',
    category: 'Развлечения',
  },
  {
    date: '2023-07-25',
    amount: '12500',
    comment: 'Аренда',
    category: 'Жилье',
  },
  {
    date: '2019-08-09',
    amount: '600.50',
    comment: 'Концерт',
    category: 'Развлечения',
  },
  {
    date: '2024-09-03',
    amount: '7200',
    comment: 'Мебель',
    category: 'Дом',
  },
  {
    date: '2015-10-17',
    amount: '1500',
    comment: 'Онлайн-курсы',
    category: 'Образование',
  },
];

console.log(sortOperations(operations));

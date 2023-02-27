# validate - валидация данных

#### Описание
Нужно реализовать функцию validate для проверки данных в объекте.
На вход приходит набор данных (например, данные формы) и набор правил для валидации, описанных в определенном формате.
Нужно понять, соответствуют ли данные этим правилам и, если нет, выдать информацию - какие данные каким правилам не соответствуют.

#### Входные данные
- data - объект, где ключи - имена полей, а значения - значения притивных типов (не массивы/объекты)
- rules - объект набором правил, где ключи - имена полей, а значения - объект с правилами валидации. Правила записаны

#### Выходные данные - объект с полями:
- result - булево значение, если ошибок не было - true, были - false
- errors - если не было ошибок - пустой массив, если были - массив объектов формата с полями:
  - field - название поля
  - value - значение поля
  - rule - имя правила, которому не соответсвовало поле

Пример:
```js
var data = {
  name: 'Alex',
  age: 30,
  profession: 
};
var rules = {
  name: { required: true, minLength: 1, maxLength: 3 },
  age: { min: 18, max: 60 },
}

validate(data, rules); // { result: true, errors: [] }
data.age = 5;
validate(data, rules); // { result: false, errors: [{field: 'age', value: 30, error: 'max'}] }
```

Набор возможных правил (в скобках - параметр):
- required (bool) - поле содержится в объекте и не равно null. Если required в правилах нет - поле считается опциональным.
- isString (bool) - поле - это строка
- isNumber (bool) - поле - это корректное число
- isBoolean (bool) - поле - это булево значение
- minLength (number) - поле - это строка с длиной больше или равной параметру
- maxLength (number) - поле - это строка с длиной меньше или равной параметру
- min (number) - поле - это число больше или равное параметру
- max (number) - поле - это число меньше или равное параметру
- isEmail (bool) - поле - корректный email (базовая проверка на корректность, без сложных случаев)

# СПИСОК МАТЕРИАЛОВ<br />
### Базовые темы, изучение которых необходимо для решения тестового задания:<br />
- [Типы данных](https://www.youtube.com/watch?v=MhclBrxHZ9o&list=PLlwtdxQXoJAtV52YQ4wZIqEg4-Q0vIgzh&index=4&ab_channel=EasyCode)
- [Переменные](https://www.youtube.com/watch?v=_mDRMdx4GnU&list=PLlwtdxQXoJAtV52YQ4wZIqEg4-Q0vIgzh&index=5&ab_channel=EasyCode)
- [Преобразование типов](https://www.youtube.com/watch?v=aDfFtf2-OB4&list=PLlwtdxQXoJAtV52YQ4wZIqEg4-Q0vIgzh&index=6&ab_channel=EasyCode)
- [Числа](https://www.youtube.com/watch?v=-tCMB1EPy3c&list=PLlwtdxQXoJAtV52YQ4wZIqEg4-Q0vIgzh&index=7&ab_channel=EasyCode)
- [Строки](https://www.youtube.com/watch?v=WFnpc7OePzE&list=PLlwtdxQXoJAtV52YQ4wZIqEg4-Q0vIgzh&index=8&ab_channel=EasyCode)
- [Объекты](https://www.youtube.com/watch?v=zTvJRdjCesQ&list=PLlwtdxQXoJAtV52YQ4wZIqEg4-Q0vIgzh&index=10&ab_channel=EasyCode)
- [Методы объектов](https://www.youtube.com/watch?v=DSVUuOarZFY&list=PLlwtdxQXoJAtV52YQ4wZIqEg4-Q0vIgzh&index=20&ab_channel=EasyCode)
- [Логические операторы](https://www.youtube.com/watch?v=7oYmoIKDuHQ&list=PLlwtdxQXoJAtV52YQ4wZIqEg4-Q0vIgzh&index=11&ab_channel=EasyCode)
- [Тернарный оператор. Switch-case](https://www.youtube.com/watch?v=oEDJ5b-Ws0o&list=PLlwtdxQXoJAtV52YQ4wZIqEg4-Q0vIgzh&index=12&ab_channel=EasyCode)
- [Функции](https://www.youtube.com/watch?v=csrCSOwWX3s&list=PLlwtdxQXoJAtV52YQ4wZIqEg4-Q0vIgzh&index=14&ab_channel=EasyCode)
- [Базовые методы массивов](https://www.youtube.com/watch?v=jfV3-xQVTbY&list=PLlwtdxQXoJAtV52YQ4wZIqEg4-Q0vIgzh&index=15&ab_channel=EasyCode)
- [Перебирающие методы массивов](https://www.youtube.com/watch?v=AmjpM4QosxY&list=PLlwtdxQXoJAtV52YQ4wZIqEg4-Q0vIgzh&index=19&ab_channel=EasyCode)
- [Ошибки в JavaScript](https://www.youtube.com/watch?v=qYhsv6NrfVo&ab_channel=%D0%A5%D0%B5%D0%BA%D1%81%D0%BB%D0%B5%D1%82)
- [Конструкция try catch finally](https://www.youtube.com/watch?v=xXDQWuxxmgk&ab_channel=%D0%98%D0%B7%D1%83%D1%87%D0%B0%D0%B5%D0%BC%D0%BC%D0%B8%D1%80%D0%98%D0%A2%2F%D0%9E%D0%BB%D0%B5%D0%B3%D0%A8%D0%BF%D0%B0%D0%B3%D0%B8%D0%BD%2F%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)

### Дополнительные ресурсы для изучения, которые помогут в подготовке:
**ВАЖНО! Не нужно смотреть все видео из плейлиста!** Также не нужно проходить курсы от начала и до конца, не трать время впустую! Сверься со списком базовых тем выше и посмотри выборочно материалы только по этим темам! Для того, чтобы сэкономить своё время, выбери один-два источника из предложенных и используй их для решения ТЗ. Помни, твоя цель - решить задачу, а не изучить JS полностью самостоятельно, это ты сможешь сделать на курсе обучения в Ката Академии. 

- https://youtu.be/Bluxbh9CaQ0 - канал Владилена Минина. В данном видео рассматривается база языка для начинающих. На начальном этапе, для выполнения ТЗ, будет полезно посомтреть всё, кроме последних трех частей по тайм-кодам (Асинхронность, Работа с DOM, Заключение)
- https://ru.code-basics.com/languages/javascript - интерактивный курс по основам. Полное прохождение курса займет неделю, лучше совместить с параллельным изучением других источников, для решения ТЗ одного этого курса будет мало.
- https://learn.javascript.ru/first-steps / https://learn.javascript.ru/data-types / https://learn.javascript.ru/error-handling - основы языка в виде коротких статей. Этот ресурс используйте как справочник по определённым темам.


![Программа JavaScript](http://i.imgur.com/vseQ56D.png)


**РЕКОМЕНДАЦИИ:**
1. Не стесняйся загуглить текст ошибки.
2. Если не работает большой кусок кода - попробуй исправлять его частями. Мысленно пройдись последовательно по коду, записывая значения переменных и результат работы. 
3. Постарайся разбить большую задачу на маленькие подзадачи и решать их по отдельности - так гораздо проще. Или упрости задачу до варианта, который ты можешь решить, а потом дорабатывай ее до необходимых требований.
4. Если не знаешь, как работать с римскими числами, воспользуйся преобразованием римских чисел в арабские. Как это сделать можно легко найти в интернете.<br /><br />

---

# Q&A (вопросы и ответы)

#### Я знаю другой язык программирования, но не знаю JavaScript, что можно посмотреть/почитать о сходствах и различиях языков?

1. [Side-by-side code snippets](https://rosetta.alhur.es/) - сравнение примеров кодов на разных языках. Выбираем ваш язык и javascript - изучаем сходства/различия.
2. [Learn X in Y minutes - JS](https://github.com/adambard/learnxinyminutes-docs/blob/master/ru-ru/javascript-ru.html.markdown) - Короткий обзор синтаксиса языка.
3. Все ссылки из предыдущего вопроса<br /><br />

#### Я написал код, а мне выдает какую-то ошибку

[Что пошло не так? Устранение ошибок JavaScript](https://developer.mozilla.org/ru/docs/Learn/JavaScript/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B5_%D1%88%D0%B0%D0%B3%D0%B8/%D0%A7%D1%82%D0%BE_%D0%BF%D0%BE%D1%88%D0%BB%D0%BE_%D0%BD%D0%B5_%D1%82%D0%B0%D0%BA)<br /><br />

#### Я не знаю, как подступиться к задаче

1. Мысленно пройдись последовательно по коду, записывая значения переменных и результат работы.
2. Постарайся разбить большую задачу на маленькие подзадачи и решать их по отдельности - так гораздо проще. Или упрости задачу до варианта, который ты можешь решить, а потом дорабатывай ее до необходимых требований.<br /><br />

### Удачи тебе и успеха в выполнении Тестового задания и в прохождении отбора в Ката Академию! Дерзай!

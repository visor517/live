Дана доска размером M × N клеток. Клетка может находиться в одном из двух состояний: 1 — живая, 0 — мёртвая. Каждая клетка взаимодействует с восемью соседями. Правила таковы:
1.	Живая клетка, у которой меньше двух живых соседей, погибает.
2.	Живая клетка, у которой два или три живых соседа, выживает.
3.	Живая клетка, у которой больше трёх живых соседей, погибает.
4.	Мёртвая клетка, у которой три живых соседа, возрождается.
Напишите программу, которая будет:
— случайным образом генерить стартовое состояние;
— уметь получать его из файла (способ выбирается через параметры запуска в консоли);
— каждую секунду выводить в консоль новое состояние доски.

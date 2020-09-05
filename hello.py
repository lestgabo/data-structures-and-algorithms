import math
msg = 'wello World'
teststring = msg.capitalize()
# print(teststring)


def test():
    a = 5
    b = 2
    return(a+b)


def loops():

    numbers = [1, 23, 4, 5, 6, 7]
    for i, value in enumerate(numbers):
        print(i, value)

    try:
        raise IndexError('This is an Index Error.')
    except IndexError as e:
        pass
    except (TypeError, NameError):
        pass
    else:
        print('All good!')
    finally:
        print('Clean up.')

    filled_dict = {"one": 1, "two": 2, "three": 3}
    iterable = filled_dict.keys()
    print(iterable)
    for i in iterable:
        print(i)

    # iterable[0]
    iterator = iter(iterable)
    # print(iterator)
    print(next(iterator))
    print(next(iterator))
    # print(next(iterator))
    # print(next(iterator))
    print('list iterable and iterator',)
    print(list(iterable))
    print(list(iterator))


def functions():
    def add(x, y):
        print('x is {} and y is {}'.format(x, y))
        return x + y

    sum = add(y=22, x=33)
    print('sum', sum)

    def varargs(*args):
        return args

    print(varargs(1, 2, 3))

    def keyword_args(**kwargs):
        return kwargs

    print(keyword_args(big="foot", loch="ness"))

    def swap(x, y):
        return y, x
    x = 1
    y = 2
    x, y = swap(x, y)
    print(x, y)

    x = 5
    print('old x: ', x)

    def set_x(num):
        x = num
        print('inside a function x:', x)

    def set_global_x(num):
        global x
        print('current global x:', x)
        x = num
        print('new global x: ', x)

    set_x(43)
    set_global_x(6)

    def create_adder(x):
        def adder(y):
            return x+y
        return adder

    add_15 = create_adder(15)
    print('add15: ', add_15(2))

    l = (lambda x: x > 5)(23)
    ll = (lambda x, y: x ** 2 + y**2)(2, 3)
    print(l, ll)

    list_comprehension = [add_15(i) for i in [1, 2, 3]]
    print(list_comprehension)
    list_comprehension2 = [x for x in [3, 4, 5, 6, 7] if x > 4]
    print(list_comprehension2)

    lc = {x for x in 'asdy4rydfhdfh' if x not in 'asdy'}
    print(lc)
    lc2 = {x: x**2 for x in range(3)}
    print(lc2)
    # range(3) means up to 3, and [a,b) open/closed or a <= x < b


x = 5
# print('old x: ', x)


if __name__ == "__main__":
    # print(loops())
    # print(functions())
    # print(math.sqrt(169))

    # from math import ceil, floor
    # print(ceil(3.4))
    # print(floor(78.66))
    x = [[1]]
    print(x + [[2]])

class MyStack:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self._queue = collections.deque()

    def push(self, x: int) -> None:
        """
        Push element x onto stack.
        """
        q = self._queue
        q.append(x)
        for _ in range(len(q)-1):
            q.append(q.popleft())

    def pop(self) -> int:
        """
        Removes the element on top of the stack and returns that element.
        """
        return self._queue.popleft()

    def top(self) -> int:
        """
        Get the top element.
        """
        return self._queue[0]

    def empty(self) -> bool:
        """
        Returns whether the stack is empty.
        """
        return not self._queue


# works in leetcode -> need correct setup -> dont know how to for now

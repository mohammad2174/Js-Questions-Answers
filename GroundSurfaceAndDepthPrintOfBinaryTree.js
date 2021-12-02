class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    }

    contains(data) {
        if (this.data === data) {
            return this;
        }

        if (this.data < data && this.right) {
            return this.right.contains(data);
        } else if (this.data > data && this.left) {
            return this.left.contains(data);
        }
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBT(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
            arr.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
            arr.unshift(...node.children);
            fn(node);
        }
    }

    validation(node, min = null, max = null) {
        if (max !== null && node.data > max) {
            return false;
        }
    
        if (min !== null && node.data < min) {
            return false;
        }
    
        if (node.left && !validate(node.left, min, node.data)) {
            return false;
        }
    
        if (node.right && !validate(node.right, node.data, max)) {
            return false;
        }
    
        return true;
    }

    maxDepth(root) {
        if (root === null) {
            return 0;
        }

        return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));
    }

    averageOfLevels(root) {
        const averages = [];
        const queue = [root];

        while (queue.length) {
            let sum;
            let size = queue.length;

            for (let i = 0; i < size; i++) {
                const node = queue.shift();
                sum += node.val;

                if (node.left) {
                    queue.push(node.left);
                }

                if (node.right) {
                    queue.push(node.right);
                }
            }
            averages.push(sum / size);
        }
        return averages;
    }

    printPath(root, list = [], depth = 0) {
        if (root === null) {
            return;
        }
        list[depth++] = root.val;
        if (root.left === null && root.right === null) {
            list = list.slice(0, depth);
        }
        return list;
    }
}


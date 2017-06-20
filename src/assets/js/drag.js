export const Drag = () => {
    function Pointer(x, y) {
        this.x = x;
        this.y = y;
    }

    function Position(left, top) {
        this.left = left;
        this.top = top;
    }

    jQuery(".item_content .item").each(function(i) {
        this.init = function() { // 初始化
                this.box = jQuery(this).parent();
                jQuery(this).attr("index", i).css({
                    position: "absolute",
                    left: this.box.offset().left,
                    top: this.box.offset().top
                }).appendTo(".item_content");
                this.drag();
            },
            this.move = function(callback) { // 移动
                jQuery(this).stop(true).animate({
                    left: this.box.offset().left,
                    top: this.box.offset().top
                }, 500, function() {
                    if (callback) {
                        callback.call(this);
                    }
                });
            },
            this.collisionCheck = function() {
                var currentItem = this;
                var direction = null;
                jQuery(this).siblings(".item").each(function() {
                    if (
                        currentItem.pointer.x > this.box.offset().left &&
                        currentItem.pointer.y > this.box.offset().top &&
                        (currentItem.pointer.x < this.box.offset().left + this.box.width()) &&
                        (currentItem.pointer.y < this.box.offset().top + this.box.height())
                    ) {
                        // 返回对象和方向
                        if (currentItem.box.offset().top < this.box.offset().top) {
                            direction = "down";
                        } else if (currentItem.box.offset().top > this.box.offset().top) {
                            direction = "up";
                        } else {
                            direction = "normal";
                        }
                        this.swap(currentItem, direction);
                    }
                });
            },
            this.swap = function(currentItem, direction) { // 交换位置
                if (this.moveing) return false;
                var directions = {
                    normal: function() {
                        var saveBox = this.box;
                        this.box = currentItem.box;
                        currentItem.box = saveBox;
                        this.move();
                        jQuery(this).attr("index", this.box.index());
                        jQuery(currentItem).attr("index", currentItem.box.index());
                    },
                    down: function() {
                        // 移到上方
                        var box = this.box;
                        var node = this;
                        var startIndex = currentItem.box.index();
                        var endIndex = node.box.index();;
                        for (var i = endIndex; i > startIndex; i--) {
                            var prevNode = jQuery(".item_content .item[index=" + (i - 1) + "]")[0];
                            node.box = prevNode.box;
                            jQuery(node).attr("index", node.box.index());
                            node.move();
                            node = prevNode;
                        }
                        currentItem.box = box;
                        jQuery(currentItem).attr("index", box.index());
                    },
                    up: function() {
                        // 移到上方
                        var box = this.box;
                        var node = this;
                        var startIndex = node.box.index();
                        var endIndex = currentItem.box.index();
                        for (var i = startIndex; i < endIndex; i++) {
                            var nextNode = jQuery(".item_content .item[index=" + (i + 1) + "]")[0];
                            node.box = nextNode.box;
                            jQuery(node).attr("index", node.box.index());
                            node.move();
                            node = nextNode;
                        }
                        currentItem.box = box;
                        jQuery(currentItem).attr("index", box.index());
                    }
                }
                directions[direction].call(this);
            },
            this.drag = function() { // 拖拽
                var oldPosition = new Position();
                var oldPointer = new Pointer();
                var isDrag = false;
                var currentItem = null;
                jQuery(this).mousedown(function(e) {
                    e.preventDefault();
                    oldPosition.left = jQuery(this).position().left;
                    oldPosition.top = jQuery(this).position().top;
                    oldPointer.x = e.clientX;
                    oldPointer.y = e.clientY;
                    isDrag = true;

                    currentItem = this;

                });
                jQuery(document).mousemove(function(e) {
                    var currentPointer = new Pointer(e.clientX, e.clientY);
                    if (!isDrag) return false;
                    jQuery(currentItem).css({
                        "opacity": "0.8",
                        "z-index": 999
                    });
                    var left = currentPointer.x - oldPointer.x + oldPosition.left;
                    var top = currentPointer.y - oldPointer.y + oldPosition.top;
                    jQuery(currentItem).css({
                        left: left,
                        top: top
                    });
                    currentItem.pointer = currentPointer;
                    // 开始交换位置

                    currentItem.collisionCheck();

                });
                jQuery(document).mouseup(function() {
                    if (!isDrag) return false;
                    isDrag = false;
                    currentItem.move(function() {
                        jQuery(this).css({
                            "opacity": "1",
                            "z-index": 0
                        });
                    });
                });
            }
        this.init();
    });
};
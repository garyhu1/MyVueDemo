import Mock from 'mockjs';
//定义需要的数据
let todos = [];
//定义数据个数
const COUNT = [1, 2, 3, 4, 5];
for (var i = 0; i < COUNT.length; i++) {
    todos.push(MOck.mock({
        id: Mock.Random.guid(),
        title: Mock.Random.first(), // 随机标题
        isDelete: false, //是否删除
        locked: Mock.Random.boolean(), // 随机锁定
        record: COUNT.map(() => { // 代办单项列表的数据
            return {
                text: Mock.Random.cparagraph(2), // 随机内容
                isDelete: false, //是否删除
                checked: Mock.Random.boolean() //是否完成
            };
        })
    }));

}

export {
    todos
}
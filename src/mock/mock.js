import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Mock from 'mockjs';

import { todos } from './data/todoList';

export default {
    start() { // 初始化函数
        let mock = new MockAdapter(axios); // 创建 MockAdapter 实例
        // 获取todo列表
        mock.onGet('/todo/list').reply(config => { //  config 指 前台传过来的值
            let mockTodo = Todos.map(tode => { // 重组 Todos数组，变成我们想要的数据
                return {
                    id: tode.id,
                    title: tode.title,
                    count: tode.record.filter((data) => {
                        if (data.checked === false) return true;
                        return false;
                    }).length, // 过滤到record里面 ‘checked’ 为true的数据，因为它们已经被完成了
                    locked: tode.locked,
                    isDelete: tode.isDelete
                };
            }).filter(tode => {
                if (tode.isDelete === true) return false; // 过滤掉 ‘isDelete’为true，因为已经被删除了。
                return true;
            });
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        todos: mockTodo // 返回状态为200，并且返回todos数据
                    }]);
                }, 200);
            });
        });
        // 新增一条todo
        mock.onPost('/todo/addTodo').reply(config => {
            Todos.push({
                id: Mock.Random.guid(),
                title: 'newList',
                isDelete: false,
                locked: false,
                record: []
            });
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200]);
                }, 200);
            });
        });
    }
};
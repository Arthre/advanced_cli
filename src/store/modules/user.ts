import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => {
    const userInfo = ref({
      userName: '张三',
      sex: '男',
      age: '18',
    });

    return {
      userInfo,
    };
  },
  actions: {},
});

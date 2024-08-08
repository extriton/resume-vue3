import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import person from '../assets/js/resume'

export const useUserStore = defineStore('user', () => {
  
  //-------------------------------------------------------------------------------------------------------
  // State
  //-------------------------------------------------------------------------------------------------------
  const _person = ref(person)

    //-------------------------------------------------------------------------------------------------------
  // Computed
  //-------------------------------------------------------------------------------------------------------
  const user = computed(() => {
    return _person.value
  })

  return {
    user
  }
})

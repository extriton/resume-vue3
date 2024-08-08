import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useControlStore = defineStore('control', () => {
  
  //-------------------------------------------------------------------------------------------------------
  // State
  //-------------------------------------------------------------------------------------------------------
  const control = ref({
    isOpenedCenterBlock: false,
    isEndScan: false,
    isShowMain: false,
    currentPage: null
  })

  //-------------------------------------------------------------------------------------------------------
  // Actions
  //-------------------------------------------------------------------------------------------------------
  function setOpenCenterBlock () {
    control.value.isOpenedCenterBlock = true
  }

  function setEndScan () {
    control.value.isEndScan = true
  }

  function setShowMain () {
    control.value.isShowMain = true
  }
  
  function setCurrentPage (payload) {
    control.value.currentPage = payload
  }

  return {
    control,
    setOpenCenterBlock,
    setEndScan,
    setShowMain,
    setCurrentPage
  }
})

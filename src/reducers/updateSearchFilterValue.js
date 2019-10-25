const updateSearchFilterValue = (state = "", action) => {
    switch (action.type) {
      case 'UPDATE_SEARCH_FILTER':
        return action.searchQuery;
        
      default:
        return state
    }
  }

  export default updateSearchFilterValue
class Status {
  setTitle = (title) => (this.title = title);
  setSearch = (search) => (this.search = search);
  setMoveOnlyOne = (moveOnlyOne) => (this.moveOnlyOne = moveOnlyOne);
  setShowSelected = (showSelected) => (this.showSelected = showSelected);
  setItemSize = (itemSize) => (this.itemSize = itemSize);
  setItemWidth = (itemWidth) => {
    this.itemWidth = itemWidth;
    console.log('[Status-itemWidth]:', this.itemWidth);
  };
  setItemHeight = (itemHeight) => (this.itemHeight = itemHeight);
}

export default new Status();

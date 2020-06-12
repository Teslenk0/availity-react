---
title: <Pagination /> ( Default Export )
---

This is the provider component needed for `@availity/pagination` components to work. All `@availity/pagination` components must be children of a Pagination provider.

## Example

```jsx
import React from 'react';
import Pagination from '@availity/pagination';
// ...
<Pagination itemsPerPage={25} items={this.state.items}>
  <Pagination.Content component={Component} />
</Pagination>
```

## Props

### `items? Array<Object> | (currentPage: number, itemsPerPage: number) => { items: Array<Object>, totalCount: number }`

If Array, defaults `totalCount` to the length of the array, and page values are sliced from the Array. If a function, it is called with the current page as an argument and expects an array of items to be returned.

### `itemsPerPage?: number`

The total amount of items to render at a time. ( After all the filtering ). **Default:** `10`.

### `page?: number`

Optionally pass your own page in to make the pagination component controlled from props.

### `onPageChange?: (page: number) => void`

Function to call after the new page has been set when the user changes the page

### `watchList?: Array<any>`

Array of data points that, when changed, causes the pagination to update. This is helpful when the `items` prop is a function and you want `items` to be called to get the most up-to-date list.

### `resetParams?: Array<any>`

Array of data points that, when changed, causes pagination to reset the current page to 1.

### `defaultPage?: number`

The starting page to use when the component mounts. **Default:** `1`.

### `debounceTimeout?: number`

The amount of time (in milliseconds) to delay fetching page data since the last time page data was fetched (debounced input). Useful for when `items` is a function that's calling an api that you want to relieve pressure on. **Default**: `0`

### `shouldReturnPrevious?: boolean`

If `true`, the previous results are returned. Note: if no results have been fetched thus far, an empty array is returned. Useful for when `items` is a function and new results should not be fetched until certain criteria is met. **Default:** `false`.

### `onError?: (error: Error) => void`

Function to call when an error occurs

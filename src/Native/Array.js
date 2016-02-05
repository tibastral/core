Elm.Native.Array = {};
Elm.Native.Array.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Array = localRuntime.Native.Array || {};
	if (localRuntime.Native.Array.values)
	{
		return localRuntime.Native.Array.values;
	}


	function init(size, startingIndex, func)
	{
		var table = new Array(size);
		var maxIndex = startingIndex + size;
		for (var index = startingIndex; index < maxIndex; ++index)
		{
			table[index] = func(index);
		}
		return table;
	}


	function map(func, table)
	{
		var i = table.length;
		var newArray = new Array(i);
		while (--i)
		{
			newArray[i] = func(table[i]);
		}
		return newArray;
	}


	function foldl(func, acc, table)
	{
		var len = table.length;

		for (var i = 0; i < len; ++i)
		{
			acc = A2(func, table[i], acc);
		}
		return acc;
	}


	function foldr(func, acc, table)
	{
		var i = table.length;

		while (--i)
		{
			acc = A2(func, table[i], acc);
		}
		return acc;
	}


	return localRuntime.Native.Array.values = {
		init: F3(init),
		map: F2(map),
		foldr: F3(foldr),
		foldl: F3(foldl)
	};
};
Elm.Native.Debug = {};
Elm.Native.Debug.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Debug = localRuntime.Native.Debug || {};
	if (localRuntime.Native.Debug.values)
	{
		return localRuntime.Native.Debug.values;
	}

	var toString = Elm.Native.Utils.make(localRuntime).toString;

	function log(tag, value)
	{
		if (localRuntime.debug)
		{
			localRuntime.debug.log(tag, value);
		}
		else
		{
			var msg = tag + ': ' + toString(value);
			var process = process || {};
			if (process.stdout)
			{
				process.stdout.write(msg);
			}
			else
			{
				console.log(msg);
			}
		}
		return value;
	}

	function crash(message)
	{
		throw new Error(message);
	}

	return localRuntime.Native.Debug.values = {
		crash: crash,
		log: F2(log)
	};
};

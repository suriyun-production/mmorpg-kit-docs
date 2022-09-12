# Day-Night time

Day-Night time have 2 parts are:

## Updater

This is scriptable object which can set to `GameInstance -> DayNightTimeUpdater` it will be used by network game manager to init time of day by server and update time of day by both server and client. If there is no updater set to `GameInstance -> DayNightTimeUpdater` it will create and use instance of `DefaultDayNightTimeUpdater`. 

`DefaultDayNightTimeUpdater` is default updater which can be created by right click in `Project` window then choose `Create -> Create DayNightTimeUpdater -> Default Day Night Time Updater`.

Developer can create their own day night time updater by inherit `BaseDayNightTimeUpdater` class.

## Applyer

Applyer is just a component which will get time of day (by codes: `GameInstance.Singleton.DayNightTimeUpdater.TimeOfDay`) to apply scene's day-night time, about how to apply it, it's up to how developer will do it. A built-in applyer is `SampleDayNightTimeApplyer` will apply day-night time by changes light color and direction by a time.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE2MDY0ODk3NzVdfQ==
-->
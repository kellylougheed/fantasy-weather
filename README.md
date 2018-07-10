# Fantasy Weather App

The goal of this application was to use particle systems, a Google Poly object, and an environment. 

<img src="fantasyweather.gif" alt="Fantasy Weather App" />

## Issues as of July 10, 2018
*  The snow (which is rain) does not turn off. It can now be replaced with the preset particle-system snow. See below for fountain.
* The Google Poly Block still makes the display slow and, at times appear glitchy.  


## Attempted Fixes

* We have tried removing the fountain with setAttribute.
* We have tried removing the rain with setAttribute.
* We have tried using createElement, appendChild, and removeChild to control the fountain and the environment -- however, these elements did not disappear.
* We have tried making the environment not active, although it still exists and prevents the particle system from running after it is created.
* It could be that directly linking a Google Poly Block reduced some of the slowness or glitchiness. Not sure. Seems better, but still not glitch-free.

## Resolved Issues

* The snow does display at the same time as the environment, because it is a rain attribute.
* The fountain does turn off.
* The fountain particle system does display at the same time as the environment. To make particle-systems behave with an environment, the fog attribute in the environment must be set to 0.
* When the environment is turned off, the pink background now disappears. The environment will disappear when its "active" attribute is set to false.
* The Google Poly block is now directly linked.
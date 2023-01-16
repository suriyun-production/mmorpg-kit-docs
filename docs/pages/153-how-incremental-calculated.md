# How Incremental Values Being Calculated

In this project you can find `IncrementalXX` structs which will be used for level, amount calculating (such as equipment's attribute amount bonus calculating)

In this document will show a example how it will be calculated.

For the example, if it has a equipment item which has one `IncreaseAttributes` setup and the entry's amount settings is

- `Base Amount` = `15`
- `Amount Increase Each Level` = `5`
- `Amount Increase Each Level By Levels[0].Min Level` = `5`
- `Amount Increase Each Level By Levels[0].Amount Increase Each Level` = `10`
- `Amount Increase Each Level By Levels[1].Min Level` = `10`
- `Amount Increase Each Level By Levels[1].Amount Increase Each Level` = `20`

Its amount will increase when item's level `> 1` by `5`
Then if item's level `>= 5`, it will increase amount by `10`
And if item's level `>= 10`, it will increase amount by `20`

So this is result for each level:

- Item Level `1`, Amount is `Base Amount` so the amount is `15`
- Item Level `2`, Amount is `Base Amount` + `Amount Increase Each Level` which is `5` so the amount is `20`
- Item Level `3`, Amount is `15` + `5` + `5` = `25`
- Item Level `4`, Amount is `15` + `5` + `5` + `5` = `30`
- Item Level `5` will started increase amount by `Amount Increase Each Level By Levels[0]` setting, Amount is `15` + `5` + `5` + `5` + `Amount Increase Each Level By Levels[0].Amount Increase Each Level` which is `10` so the amount is `40`
- Item Level `6`, Amount is `15` + `5` + `5` + `5` + `10` + `10` = `50`
- Item Level `7`, Amount is `15` + `5` + `5` + `5` + `10` + `10` + `10` = `60`
- Item Level `8`, Amount is `15` + `5` + `5` + `5` + `10` + `10` + `10` + `10` = `70`
- Item Level `9`, Amount is `15` + `5` + `5` + `5` + `10` + `10` + `10` + `10` + `10` = `80`
- Item Level `10`, Amount is `15` + `5` + `5` + `5` + `10` + `10` + `10` + `10` + `10` + `20` = `100`
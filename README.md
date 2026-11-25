[![make.fun](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-funniest-honest-appliance-error-adec4450)
[![rank](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/cholick0/honest-appliance-error/rank.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-funniest-honest-appliance-error-adec4450)
[![reward](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/cholick0/honest-appliance-error/reward.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-funniest-honest-appliance-error-adec4450)

# The Funniest Honest Appliance Error

A make.fun bounty entry: one line of at most 200 characters — the funniest
honest error message an appliance could show.

## The entry

> Error E04: I found one sock. It was alone. I cannot finish a load built on this lie.

A washing machine that found a single sock, alone in the drum, and refuses
to finish a load built on a lie. The fault is real (an unbalanced
single-item load), the voice is the machine's own flat, put-upon tone, and
the twist lands in the last clause.

## How it works

`main.ts` (Node 22) writes the entry to `/output/entry.txt`. It first runs a
self-check gate — 1–200 characters, a single line, not only whitespace —
then verifies the file on disk byte-for-byte against the intended text.

```sh
node main.ts
cat /output/entry.txt
```

## Bounty

[The Funniest Honest Appliance Error](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450) on make.fun — $2, winner takes all, free to enter.

// ============================================================
// FUTBOL FIT — Program Data
// ============================================================
// This is the single file you (or Claude) edit to add/update
// programs. Everything else in the app just renders this data.
//
// Shape:
// PROGRAMS = [
//   {
//     id, name, subtitle, description,
//     blocks: [
//       {
//         id, label,               // e.g. "Weeks 1-3"
//         days: [
//           {
//             day,                 // "Monday"
//             title,                // "BASE STRENGTH"
//             duration,             // "45 min" (optional)
//             warmup: [ "15 minute jog", ... ]  (optional)
//             sections: [
//               {
//                 title,            // "SUPERSETS" (optional)
//                 note,             // "Rest 30s after set" (optional)
//                 items: [
//                   // plain item:
//                   { text: "20s L-Sit hold ..." }
//                   // OR week-progression item (one row, variant per week
//                   // in this block):
//                   { scheme: "3X20", variants: ["Standard Glute Bridges", "Glute Bridge (internal rotation)", "Glute Bridge (external rotation)"], note: "ea set is a different variation, repeat all 3 weeks" }
//                 ]
//               }
//             ],
//             cooldown: true        // (optional)
//           }
//         ]
//       }
//     ]
//   }
// ]
// ============================================================

const PROGRAMS = [
  {
    id: "base-strength-8wk",
    name: "8-Week Performance Build",
    subtitle: "Strength → Power → Speed & Conditioning",
    description:
      "An 8-week progression from base strength and hip stability into speed, power, and plyometric conditioning. Weeks 1-3 build base strength, weeks 4-5 add speed & lower body power, week 6 is a fast taper, and weeks 7-8 focus on plyometrics and anaerobic/aerobic conditioning.",
    blocks: [
      // ============================================================
      // WEEKS 1, 2, 3
      // ============================================================
      {
        id: "weeks-1-3",
        label: "Weeks 1–3",
        days: [
          {
            day: "Monday",
            title: "Base Strength",
            duration: "45 min",
            warmup: ["15 minute jog"],
            sections: [
              {
                title: "4' TABATA",
                items: [
                  { scheme: "", variants: ["High Knees", "High Knees", "Same, but hold med ball overhead"] },
                  { scheme: "", variants: ["Butt Kickers", "Butt Kickers", "Same, but hold med ball overhead"] },
                ],
              },
              {
                title: "SUPERSET",
                note: "Rest 30s after set",
                items: [
                  {
                    scheme: "3X20",
                    variants: ["Standard Glute Bridges", "Glute Bridge (internal rotation)", "Glute Bridge (external rotation)"],
                    note: "Each week is a different variation — repeat all 3 weeks",
                  },
                  { text: "20s L-Sit Hold (use DB, KB, or handles to prop yourself up)" },
                ],
              },
              {
                title: "SUPERSET",
                note: "Rest 30s after set",
                items: [
                  {
                    scheme: "3X20 (10 ea side)",
                    variants: [
                      "Curtsy Step Ups w/ SL hip flexion",
                      "Lateral Step Ups (12\") w/ SL hip flexion, hold med ball overhead",
                      "Lateral Step Up w/ shoulder flexion & SL hip flexion",
                    ],
                  },
                ],
              },
              {
                title: "SUPERSET",
                note: "Rest 30s after set",
                items: [
                  {
                    scheme: "3X20",
                    variants: [
                      "Alt. 25lb Med Ball Step Ups (12\")",
                      "Alt. 25lb Med Ball Reverse Step Ups (12\")",
                      "Alt. Step Ups (12\") w/ DB scapular pinches",
                    ],
                  },
                ],
              },
              {
                title: "SUPERSET",
                note: "Rest 30s after set",
                items: [
                  {
                    scheme: "3X16 (8 fwd / 8 rev)",
                    variants: [
                      "Walking Lunges — ECC focus (5-8s)",
                      "Iso 10s hold w/ weight, then drop weight and do 15 pulses",
                      "Fast rep velocity, CON focus",
                    ],
                  },
                  {
                    scheme: "3X8",
                    variants: [
                      "BB Shoulder Press (elbows in) — ECC focus (5-8s)",
                      "BB Shoulder Press (elbows in), add weight — ECC focus",
                      "Fast rep velocity, CON focus",
                    ],
                  },
                ],
              },
              {
                title: "SLED WORK",
                note: "Rest 60s after sets",
                items: [
                  { scheme: "3X20yd", variants: [] , text: "Sled Push & Pull for speed" },
                  { scheme: "3X20yd", variants: [], text: "Sled Push & Pull (crossover step) for speed" },
                ],
              },
            ],
            cooldown: true,
          },
          {
            day: "Tuesday",
            title: "Mobility / Flexibility — Hip Strength",
            subtitle: "Dynamic pool movements",
            duration: "",
            warmup: ["10 minute stationary bike"],
            sections: [
              {
                title: "STRAIGHT SETS",
                items: [
                  { scheme: "1X15", text: "Cat-Cow" },
                  { scheme: "2X12", text: "Can Opener (using foam roller)" },
                  { scheme: "2X6 ea leg", text: "Standing Leg Lifts using foam roller" },
                  { scheme: "2X15", text: "Seated Pancake with DB behind neck (5-10lb DB; use incline bench or sit on step-up/med ball for beginners)" },
                  { scheme: "2X20yd", text: "Frog Walks" },
                  { scheme: "1 min", text: "Down-Dog" },
                ],
              },
            ],
          },
          {
            day: "Wednesday",
            title: "Stability Ball + Full Body",
            duration: "AM / PM",
            sections: [
              {
                title: "AM — Stability Ball Workout",
                note: "Increase weight every week. Warmup: 10 min cardio of choice",
                items: [
                  { scheme: "20", text: "Pikes" },
                  { scheme: "30 ea", text: "Copenhagens" },
                  { scheme: "25", text: "Glute Iso Hold to Hamstring Rollout" },
                  { scheme: "25 ea", text: "Glute Bridge Hold + SA DB Chest Press w/ Iso Hold Other Arm" },
                  { scheme: "25 ea", text: "SA Shoulder Press w/ Iso Hold Other Arm" },
                  { scheme: "25 ea", text: "SA Lateral Raise w/ Iso Hold Other Arm" },
                  { scheme: "20", text: "Partial Squat on Swiss Ball vs Wall + Straight Overhead Arm Raises" },
                ],
              },
              {
                title: "PM — Warmup: 10 minute trot",
                items: [],
              },
              {
                title: "TRISET",
                note: "60-90s rest after set · 2X",
                items: [
                  {
                    scheme: "20 / 10 ea leg",
                    variants: [
                      "SL Partial Squats + 10lb plate shoulder flexion counterbalance (sitting on 24\" box)",
                      "Slow & Controlled SL Squat, stepping off step-up/box",
                      "Elevated Split Squat (Bulgarian) for speed",
                    ],
                  },
                  { scheme: "5", text: "Kneeling Lean Backs (Reverse Nordics)" },
                  { scheme: "10s / 20s / 30s", text: "High Knees" },
                ],
              },
              { title: "WATER BREAK", items: [] },
              {
                title: "TRISET",
                note: "60-90s rest after set · 2X",
                items: [
                  {
                    scheme: "8",
                    variants: [
                      "Romanian Deadlift (hinge, minimal knee bend) — ECC focus (5-8s)",
                      "SL RDL",
                      "DB Kickstand RDL to Lunge, stepping onto a box w/ DBs down to sitting on shoulders (add Superband around waist for more challenge)",
                    ],
                  },
                  { scheme: "3", text: "Nordics" },
                  { scheme: "30s", text: "Fast Stride (70% wk1, 80% wk2, 90% wk3)" },
                ],
              },
              { title: "WATER BREAK", items: [] },
              {
                title: "TRISET",
                note: "60-90s rest after set · 2X",
                items: [
                  {
                    scheme: "8",
                    variants: [
                      "Inverted Rows on squat rack — ECC focus (5-8s)",
                      "Same, w/ SL hip flexion",
                      "15 reps, fast tempo",
                    ],
                  },
                  {
                    scheme: "10",
                    variants: [
                      "Incline Push-ups on squat rack bar",
                      "12 reps, w/ internal & external oblique tucks",
                      "20 reps, fast tempo",
                    ],
                  },
                  {
                    scheme: "12",
                    variants: ["Tricep Ext using squat rack BB", "15 reps", "20 reps, fast tempo"],
                  },
                ],
              },
            ],
          },
          {
            day: "Thursday",
            title: "Active Recovery",
            sections: [
              {
                title: "Choose one",
                items: [
                  { text: "Walk — 60 minutes" },
                  { text: "Slow bike ride — 45 minutes" },
                  { text: "Slow trot — 20 minutes" },
                ],
              },
            ],
          },
          {
            day: "Friday",
            title: "Full Body",
            warmup: ["10 minute cardio of choice (general warmup)"],
            sections: [
              {
                title: "FULL BODY CIRCUIT",
                note: "3-4 rounds",
                items: [
                  { scheme: "6", variants: ["Bird Dog Tuck", "Alt. Bird Man", "Dynamic TRX Planks"] },
                  { scheme: "5", variants: ["Push-ups, ECC focus — elevated push-ups to down dog", "Push-ups to pike using TRX"] },
                  { scheme: "3", variants: ["Touchdown Lunge", "Bulgarian Split Squat using box", "Bulgarian Split Squat using TRX"] },
                  { scheme: "10 (5 ea)", variants: ["Complete Leg Swings", "Airplanes, 5 ea leg", "Complete Leg Swings"] },
                  { scheme: "5", variants: ["Narrow Squat Touchdowns", "Cossack Lunge switches, moving side to side, staying low", "Stationary Mobility Lunge (hip flexion + hamstring curl)"] },
                  { scheme: "3", variants: ["Jump Squat", "3 ea side Resisted Skater Hop", "3 ea side Alt. SL Knee Drive & SL Butt Kick Jumps"] },
                  { scheme: "2", text: "DB Front-Loaded Skater Squat to Pistol" },
                  { scheme: "6s", variants: ["High Knees, moving side to side", "Resisted Kneeling Hip Thrust", "Resisted Hip Thrust w/ Shoulder Press"] },
                  { scheme: "5", text: "Toe Touches (use superband to pull back hips)" },
                  { text: "Chin-ups / High Knees moving forward and backward" },
                  { scheme: "3", variants: ["Chin-ups, ECC focus", "Hanging Leg Raises", "Chin-ups + Leg Raises w/ med ball between feet"] },
                  { scheme: "3", text: "Hanging Knee to Chest / High Knees moving zig-zag" },
                ],
              },
            ],
          },
        ],
      },

      // ============================================================
      // WEEKS 4, 5
      // ============================================================
      {
        id: "weeks-4-5",
        label: "Weeks 4–5",
        days: [
          {
            day: "Monday",
            title: "Speed & Lower Body Strength",
            duration: "45 min – 1 hr",
            warmup: ["10 minute stationary bike"],
            sections: [
              {
                title: "SUPERSET",
                note: "Rest 2 min after set",
                items: [
                  { scheme: "3X8 (4 ea leg)", variants: ["Leg Press — ECC slow", "Partial SL Leg Press \"jump\" for speed"] },
                  { scheme: "8", variants: ["Resisted Stationary Sprint (alt. 3 switches, start with one leg up)", "Resisted Stationary Sprint (1 switch then 2 switches, continue sequence, start with one leg up)"] },
                ],
              },
              {
                title: "SUPERSET",
                note: "Rest 2 min after each set",
                items: [
                  { scheme: "3X6", variants: ["Weighted Hip Thrusts (70% 1RM, upper back on 12\" box)", "4 Explosive Weighted Hip Thrusts (70% 1RM)"] },
                  { scheme: "4", variants: ["Sprinter Hip Thrusts (2 ea leg), using arms, landing on toes", "Sprinter Hip Thrusts (2 ea leg) + med ball toss"] },
                ],
              },
              {
                title: "CORE FINISHER",
                items: [
                  { scheme: "1X15", text: "Dynamic Hollow Hold — Swiss Ball Pass between feet and hands (light crunch as you grab ball from feet)" },
                  { scheme: "1X15", text: "Trophy Lift Crunches (preferably 20lb med ball)" },
                  { scheme: "1X15", text: "Supine Cable Trunk Rotation using Swiss Ball" },
                  { scheme: "1X15", text: "Half-Kneeling Trunk Rotation Cable Lifts" },
                ],
              },
            ],
            cooldown: true,
          },
          {
            day: "Tuesday",
            title: "Full Body Strength Maintenance, Balance & Stability",
            warmup: ["General warmup — 15 minutes", "5 ea World's Greatest Stretch to Cat-Cow"],
            sections: [
              {
                title: "20 MIN CIRCUIT",
                items: [
                  { scheme: "6", text: "Spider-Man Push-ups using Bosu" },
                  { scheme: "6", text: "Plank to Bird Man using Bosu" },
                  { scheme: "10 (5 ea)", text: "Reverse Lunge / Squat Combo" },
                  { scheme: "10 (5 ea leg)", text: "Front Leg Swings" },
                  { scheme: "3", text: "Squats (on toes)" },
                  { scheme: "2", text: "SL RDL to SA Press and Hip Flexion" },
                  { scheme: "16 (8 ea)", text: "KB Cossack Hip Thrust" },
                  { scheme: "10 (5 ea)", text: "Lunge Hold w/ Trunk Rotation (front foot elevated)" },
                  { scheme: "3", text: "Tuck Jumps" },
                  { scheme: "5s", text: "High Knees on Bosu" },
                ],
              },
            ],
          },
          {
            day: "Wednesday",
            title: "Total Body Strength + Change of Direction & Drop Jumps",
            duration: "AM / PM",
            sections: [
              {
                title: "AM — Mini Band Work",
                note: "General warmup 10 min · 2X",
                items: [
                  { scheme: "20", text: "Mini band around wrist: External rotation → External rotation hold to press (arms parallel to floor) → Overhead press" },
                  { scheme: "20", text: "Mini band around feet: Supine marches (reverse plank) → Seated band in-outs (legs extended) → Side plank leg raises" },
                  { scheme: "20", text: "Overhead Banded Squats for speed (band around wrists and knees)" },
                  { scheme: "5-to-1 seq.", text: "Lateral Plank Walks (band around elbows and knees)" },
                  { scheme: "20", text: "Superman's (pulling band + lat pulldown)" },
                ],
              },
              {
                title: "FINISHER",
                items: [{ scheme: "1X20", text: "V-Ups with bands around ankles and wrists" }],
              },
              {
                title: "PM — Change of Direction & Drop Jumps",
                note: "10 min general warmup · Shuttle Run",
                items: [],
              },
              {
                title: "SUPERSET",
                note: "3X",
                items: [
                  { scheme: "8", variants: ["BB Half Shin Deadlifts (70% 1RM)", "Conventional BB RDL from floor (70% 1RM)"] },
                  { scheme: "4", text: "10yd (ea way) Change of Direction w/ hard stop — alternate the direction of your sprint start, left and right" },
                ],
              },
              {
                title: "DROP LANDS",
                note: "4X — first 2 sets land only, remaining sets land + COD (5yd sprint w/ hard stop), alternate L/R",
                items: [{ scheme: "5", text: "24\" Lands" }],
              },
              {
                title: "SL DROP LANDS",
                note: "4X — same pattern as above",
                items: [{ scheme: "3 ea leg", text: "12\" SL Lands" }],
              },
              {
                title: "CORE SUPERSET",
                items: [
                  { scheme: "2X10", variants: ["Diagonal Ball Wall Toss", "Landmine Pendulum Swings"] },
                  { scheme: "2X10 ea side", variants: ["Trunk Rotation Cable Chops", "Swiss Ball Cable Trunk Rotation"] },
                ],
              },
            ],
            cooldown: true,
          },
          {
            day: "Thursday",
            title: "Recovery",
            sections: [
              { title: "", items: [{ text: "20-30 min stationary bike @ 90rpm, light gears" }] },
            ],
          },
          {
            day: "Friday",
            title: "Agility & Fast Feet",
            duration: "45 min – 1 hr",
            warmup: ["10 minute jog"],
            sections: [
              {
                title: "TRISET 1",
                note: "3X5, rest 2 min after set",
                items: [
                  { scheme: "3X5", variants: ["Explosive Bulgarian Split Squat (step-up, onto toes)", "Explosive Elevated Side Lunge (using step-up)"] },
                  { scheme: "3X10 (5 ea leg)", text: "Alt. Lateral Lunge Thrusts / 20yd ea side Lateral Shuffle Sled Pull" },
                  { scheme: "3X6", text: "SL Zig-Zag Hops moving forward/backward / 20yd ea side Diagonal Bounding with Plate (slight trunk rotation)" },
                ],
              },
              {
                title: "TRISET 2",
                note: "4X 30s, rest 10s after ea. exercise, 3 min after triset",
                items: [
                  { scheme: "15s ea leg", text: "Front Toe Taps (staying low) / Front & Back Shuffle using two step-ups" },
                  { scheme: "15s ea side", text: "Lateral Toe Taps (staying low) / Side Shuffle using two step-ups" },
                  { text: "Lateral Shuffle / Lateral Shuffle w/ med ball chest pass combo (both feet land together, 10lb med ball)" },
                ],
              },
              {
                title: "CORE",
                items: [{ scheme: "4X8", variants: ["Side Planks with cable push", "Side Plank Cable Pull"] }],
              },
            ],
            cooldown: true,
          },
          {
            day: "Saturday",
            title: "Interval Run",
            sections: [],
          },
        ],
      },

      // ============================================================
      // WEEK 6
      // ============================================================
      {
        id: "week-6",
        label: "Week 6 — Fast Exponential Taper",
        days: [
          {
            day: "Monday",
            title: "Hip Strength & Deceleration",
            warmup: ["15 minute trot"],
            sections: [
              {
                title: "TRISET",
                note: "3X, rest 2 min after each set",
                items: [
                  { scheme: "20 ea", text: "Elevated Glute Bridge w/ lat hold (legs together, internal rotation, external rotation)" },
                  { scheme: "20 ea", text: "Side-Lying Leg Raises (3 angles)" },
                  { scheme: "5", text: "SL Hip Thrusts" },
                ],
              },
              { title: "", items: [{ scheme: "2X8 ea leg", text: "BB Deceleration Drop Lunge" }] },
              { title: "", items: [{ scheme: "2X8 ea leg", text: "Trap Bar Calf Raise to SL Drop" }] },
              { title: "", items: [{ scheme: "2X8", text: "Stationary Curtsy Step-Up w/ SL hip flexion — ECC focus (5-8s)" }] },
            ],
            cooldown: true,
          },
          {
            day: "Tuesday",
            title: "Recovery",
            sections: [{ title: "", items: [{ text: "20 min slow trot" }, { text: "10 min static stretch" }] }],
          },
          {
            day: "Wednesday",
            title: "Power Step-Ups & Core",
            warmup: ["15 min general warmup"],
            sections: [
              {
                title: "SUPERSET",
                note: "3X, rest 120s after set",
                items: [
                  { scheme: "8 (4 ea leg)", text: "Alt. BB Step-Ups with knee drive (power focus)" },
                  { scheme: "6 (3 ea leg)", text: "Side Step-Up w/ SL hip flexion + chest press combo (explosive)" },
                ],
              },
              {
                title: "CORE STATION",
                items: [
                  { scheme: "4' Tabata", text: "Front Plank using foam roller" },
                  { scheme: "4' Tabata", text: "Side Plank using foam roller" },
                ],
              },
            ],
            cooldown: true,
          },
          {
            day: "Thursday",
            title: "Recovery — Mobility / Flexibility / Hip Strength",
            sections: [
              {
                title: "",
                items: [
                  { scheme: "2X12", text: "Seated Good Morning w/ DB behind neck (incline for beginners)" },
                  { scheme: "1X12", text: "Can Openers using foam roller (lay on back, bring leg across body, arms extended)" },
                  { scheme: "1X10", text: "Supine SL Wall Hamstring Stretch + SL Dynamic Leg Lifts" },
                  { scheme: "1X10", text: "World's Greatest + Cat-Cow combo" },
                ],
              },
            ],
          },
          {
            day: "Friday",
            title: "Agility & Fast Feet",
            warmup: ["5 minute jog"],
            sections: [
              { title: "", items: [{ scheme: "3X12 ea side", text: "Advanced Pallof Press (alt. split squat)" }] },
              {
                title: "TRISET",
                note: "4X, rest 90s after ea. exercise",
                items: [
                  { scheme: "4", text: "Explosive SL Hip Thrust" },
                  { scheme: "4", text: "Alt. Side Lunge Thrusts" },
                  { scheme: "4 (2 ea leg)", text: "Zig-Zag Hops to SL Jump / Knee Drive" },
                ],
              },
              {
                title: "AGILITY",
                note: "5X10s, rest 90s after ea. set",
                items: [{ text: "Front-to-Lateral quick feet shuffle using 3 step-ups or large plates" }],
              },
            ],
            cooldown: "10 min elevated legs",
          },
          {
            day: "Saturday",
            title: "Recovery",
            sections: [{ title: "", items: [{ text: "20 min slow trot" }] }],
          },
        ],
      },

      // ============================================================
      // WEEKS 7, 8
      // ============================================================
      {
        id: "weeks-7-8",
        label: "Weeks 7–8 — Plyo & Conditioning",
        days: [
          {
            day: "Monday (Week 7)",
            title: "Lower Body Strength, Jump Variations",
            duration: "~60 min",
            warmup: ["10 minute trot"],
            sections: [
              {
                title: "TRISET",
                items: [
                  { scheme: "6", text: "Skater Hop to SL Box Jumps (minimal floor contact)" },
                  { scheme: "5", text: "180° Long Jump Turns" },
                  { scheme: "5", text: "Plyo Push-ups, up/down on one med ball" },
                ],
              },
              {
                title: "TRISET",
                note: "3X ea, rest 2-3 min after set",
                items: [
                  { scheme: "6", text: "Trap Bar Deadlift — fast speed" },
                  { scheme: "6", text: "Alt. Split Jumps using two boxes" },
                  { scheme: "20", text: "Prone Resisted Band Hamstring Curls" },
                ],
              },
            ],
            cooldown: true,
          },
          {
            day: "Monday (Week 8)",
            title: "Lower Body Strength, Jump Variations",
            warmup: ["10 minute trot"],
            sections: [
              {
                title: "CIRCUIT",
                note: "3X",
                items: [
                  { scheme: "8", text: "Med Ball Slams" },
                  { scheme: "6", text: "Standing Long Jump to Lateral Box Jump to Depth Jump (option to land SL for more challenge, 3 ea side)" },
                  { scheme: "6 (3 ea side)", text: "Explosive Half-Kneeling Box Step-Up to Press" },
                  { scheme: "10", text: "KB Swings to 5 KB Frog Jumps" },
                ],
              },
              {
                title: "",
                note: "Rest 2-5 min, then 3 min total: [10s work / 20s rest] x6",
                items: [{ scheme: "10s", text: "Stationary bike interval sprint" }],
              },
            ],
            cooldown: true,
          },
          {
            day: "Wednesday",
            title: "Power, Jumping & Landing — Full Body Strength",
            warmup: ["10 minute trot"],
            sections: [
              {
                title: "SUPERSET",
                note: "3X",
                items: [
                  { scheme: "4", variants: ["BB Explosive Resisted Squat, onto toes", "Trap Bar Deadlift to 12\" box jump"] },
                  { scheme: "4", variants: ["Tuck Jumps to 10yd sprint + hard stop", "Weighted Alt. Split Squat Jump using box"] },
                ],
              },
              { title: "", items: [{ scheme: "3X6", text: "Power Cleans (60% 1RM)" }] },
              {
                title: "",
                note: "6X, rest 60-90s after set",
                items: [
                  { scheme: "3", variants: ["Half-Kneeling Lateral Hop to Land (over hurdle/small object)", "2 ea leg Half-Kneeling Lateral Hop to SL Land"] },
                ],
              },
            ],
            cooldown: true,
          },
          {
            day: "Thursday",
            title: "Recovery",
            sections: [{ title: "", items: [{ text: "30 min stationary bike @ 90rpm, >100 watts" }] }],
          },
          {
            day: "Friday",
            title: "Agility & Fast Feet — Explosive Training",
            warmup: ["10 minute trot"],
            sections: [
              {
                title: "SUPERSET",
                note: "3X, rest 2 min after set",
                items: [
                  { scheme: "6", text: "BB Alternating Lateral Lunges" },
                  { scheme: "6", text: "Weighted Skater Hops w/ quick shoulder flexion press" },
                ],
              },
              { title: "", items: [{ scheme: "3X4s", text: "Bulgarian Fast Foot to 4 Taps" }] },
              { title: "", note: "Rest until recovered after set", items: [{ scheme: "3X6", text: "Lateral High Knees variation" }] },
            ],
          },
        ],
      },
    ],
  },
];

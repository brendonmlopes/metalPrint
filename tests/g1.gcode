header: only write lowercase letters, unless it's a command like W2, which sets weldFlow=2
G0 X10 Y10 Z10
G0 X10 Y10 Z0
;This is a comment
G1 X0 Y0 Z0
G2 X10 Y0 R10
;This is another comment
G0 X0 Y0 Z0
G3 X10 Y0 R5
G0 X 5 Y5 Z-5


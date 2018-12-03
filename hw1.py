import numpy as np
import matplotlib.pyplot as plt

t, y = np.meshgrid(np.arange(-4, 5, 1), np.arange(-4, 5, 1))
u = y
v = np.power(y, 2)

plt.figure()
plt.title("y\' = $\mathregular{t^2}$")
Q = plt.quiver(t, y, u, v, units='width')

plt.show()

#take a list of 200 random number between 1 and 20 and plot a histogram with more bins
import numpy as np
import matplotlib.pyplot as plt
n, bins, patches = plt.hist(np.random.randint(1,20,200), bins=20) #pass a list of 200 integers and specify bins
plt.savefig('histogram.png')


#draw a logistic curve with zero at center and gridlines
def f(x): return np.exp(x) / (1 + np.exp(x))
x = np.linspace(-25, 25, 210)
y = f(x)
plt.plot(x, y)
plt.grid()
plt.savefig('logistic_curve.png')

#draw a sigmoid curve with zero at center gridlines with dashes and high resolution
def f(x): return 1 / (1 + np.exp(-x))
x = np.linspace(-25, 25, 512)
y = f(x)
plt.plot(x, y)
plt.grid(color='0.5', linestyle='--', linewidth=1)
plt.savefig('sigmoid.png',dpi=600) #(dpi=inches per dot)300 DPI is the default resolution for your display device ...


#draw a tanh function with zero at center gridlines with dashes and high resolution
def f(x): return np.tanh(x)
x = np.linspace(-25, 25, 210)
y = f(x)
plt.plot(x, y)
plt.grid(color='0.5', linestyle='--', linewidth=1)
plt.savefig('tahn.png',dpi=1200) #(dpi=inches per dot)300 DPI is the default resolution for your display device ...


#draw a ReLU Function with zero at center gridlines with dashes and high resolution
def f(x):
    if x > 0:
    return x 
    else:
    return 0
x = np.linspace(-30, 30, 15)
y = f(x.all)
plt.plot(x, y)
plt.grid(color='0.5', linestyle='--', linewidth=1)
plt.savefig('relu_1.png', dpi=1200)  # (dpi=inches per dot)300 DPI is the default resolution for your display device ...


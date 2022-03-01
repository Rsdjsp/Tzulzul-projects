import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const payment = (data) => {
    const accept = Math.random() * 10
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (accept > 5) {
                console.log(data)
                resolve(data)
            } else {
                reject("Error")
            }
        }, 5000)
    })
}

export const pay = createAsyncThunk("payment/pay", async (data, { rejectWithValue }) => {
    try {
        const resultado = await payment(data)
        return resultado
    } catch (error) {
        return rejectWithValue({ message: "Algo sucedio mal...", error: true })
    }
})

const paymentSlice = createSlice({
    name: "payment",
    initialState: {
        loading: false,
        error: false,
        success: false,
        total: 0,
        data: {}
    },
    reducers: {
        incrementTotal: (state, action) => {
            state.total += 1
        },
        reduceTotal: (state, action) => {
            state.total -= 1
        },
        increment: (state, action) => {
            state.total += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(pay.pending, (state) => {
            state.loading = true
        }).addCase(pay.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.total = 0
            state.success = true
        }).addCase(pay.rejected, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = action.payload.error
        })
    }
})

export default paymentSlice.reducer

export const { increment, incrementTotal, reduceTotal } = paymentSlice.actions
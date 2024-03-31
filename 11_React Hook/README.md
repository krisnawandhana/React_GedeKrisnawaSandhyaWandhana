# Materi React Hook

## Resume Materi KMReact - React Hook

Poin penting yang dapat dipelajari dari materi React Hook adalah:

### 1. Penjelasan React Hooks

React Hooks merupakan fitur baru di React 16.8 yang memungkinkan penggunaan state dan fitur React lainnya tanpa perlu menulis sebuah kelas.

Motivasi untuk menggunakan Hooks meliputi:
- Kesulitan dalam menggunakan kembali logika stateful antar komponen.
- Kompleksitas yang sulit dimengerti pada komponen.
- Kebingungan terkait dengan penggunaan kelas.

Hooks dasar meliputi:
- useState
- useEffect
- useContext

Hooks tambahan meliputi:
- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

Aturan yang harus diperhatikan saat menggunakan hook:
- Jangan memanggil hook dari loop, condition, atau nested function.
- Hanya memanggil hook dari komponen fungsi React atau custom hook.

### 2. useState dan useEffect

Penggunaan `useState` dalam function component untuk menambahkan suatu state lokal, dengan React menyimpan state antar render. Ini memberikan dua hal: nilai state saat ini dan fungsi untuk memperbarui nilai tersebut.

Contoh `useState`:

```jsx
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Anda klik sebanyak {count} kali</p>
      <button onClick={() => setCount(count + 1)}>
        Klik saya
      </button>
    </div>
  );
}
```

`useEffect` memungkinkan efek samping (side effects) dilakukan di dalam function component. Ini mirip dengan siklus hidup komponen seperti `componentDidMount`, `componentDidUpdate`, dan `componentWillUnmount`.

Contoh `useEffect`:

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Anda klik sebanyak ${count} kali`;
  });

  return (
    <div>
      <p>Anda klik sebanyak {count} kali</p>
      <button onClick={() => setCount(count + 1)}>
        Klik saya
      </button>
    </div>
  );
}
```

### 3. Custom Hook

Custom Hook memungkinkan pembuatan hook kustom yang dapat mengekstrak logika komponen ke dalam fungsi yang dapat digunakan kembali.
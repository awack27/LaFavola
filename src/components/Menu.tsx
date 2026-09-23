import { useMemo, useState } from 'react';
import { Plus, Minus, ShoppingBag, X, Check, Flame, Leaf, Star } from 'lucide-react';
import { menuItems, type MenuItem } from '@/data';
import { useLang } from '@/LanguageContext';
import { menuCopy } from '@/translations';

type CartLine = { item: MenuItem; qty: number };

export default function Menu() {
  const { lang, t } = useLang();
  const [activeCat, setActiveCat] = useState<string>('all');
  const [cart, setCart] = useState<Record<string, number>>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const categories = [
    { id: 'all', label: t.menu.all, icon: Flame },
    { id: 'classic', label: t.menu.classic, icon: Star },
    { id: 'specialty', label: t.menu.specialty, icon: Flame },
    { id: 'vegan', label: t.menu.vegan, icon: Leaf },
  ] as const;

  const filtered = useMemo(
    () =>
      activeCat === 'all'
        ? menuItems
        : menuItems.filter((m) => m.category === activeCat),
    [activeCat],
  );

  const cartLines: CartLine[] = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, qty]) => {
          const item = menuItems.find((m) => m.id === id);
          return item ? { item, qty } : null;
        })
        .filter((l): l is CartLine => l !== null),
    [cart],
  );

  const totalItems = cartLines.reduce((s, l) => s + l.qty, 0);
  const totalPrice = cartLines.reduce((s, l) => s + l.item.price * l.qty, 0);

  const addToCart = (id: string) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const removeFromCart = (id: string) =>
    setCart((c) => {
      const next = { ...c };
      if (next[id] > 1) next[id]--;
      else delete next[id];
      return next;
    });

  const placeOrder = () => {
    setOrderPlaced(true);
    setCart({});
    setTimeout(() => {
      setOrderPlaced(false);
      setCartOpen(false);
    }, 3000);
  };

  const copy = menuCopy[lang];

  return (
    <section id="menu" className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-bronze-400" />
            <span className="text-bronze-300 text-sm tracking-[0.3em] uppercase font-light">
              {t.menu.eyebrow}
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-bronze-400" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-gradient-gold mb-4">
            {t.menu.title}
          </h2>
          <p className="text-bronze-200/50 max-w-xl mx-auto">
            {t.menu.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const active = activeCat === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                  active
                    ? 'bg-gradient-to-r from-bronze-400 to-gold-400 text-charcoal-950 shadow-bronze-glow'
                    : 'border border-bronze-400/20 text-bronze-200/60 hover:border-bronze-400/50 hover:text-bronze-200'
                }`}
              >
                <Icon className="w-4 h-4" strokeWidth={1.5} />
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => {
            const c = copy[item.id as keyof typeof copy];
            return (
              <article
                key={item.id}
                className="group relative bg-charcoal-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-bronze-400/10 hover:border-bronze-400/30 transition-all duration-500 hover:shadow-bronze-glow"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={c?.name ?? item.name}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/20 to-transparent" />
                  {item.popular && (
                    <span className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 rounded-full bg-bronze-500/90 text-xs font-medium text-cream tracking-wide backdrop-blur-sm">
                      <Star className="w-3 h-3" fill="currentColor" />
                      {t.menu.popular}
                    </span>
                  )}
                  {item.category === 'vegan' && (
                    <span className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1 rounded-full bg-green-800/80 text-xs font-medium text-green-100 tracking-wide backdrop-blur-sm">
                      <Leaf className="w-3 h-3" />
                      {t.menu.vegan}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-serif text-xl font-medium text-bronze-100">
                      {c?.name ?? item.name}
                    </h3>
                    <span className="font-serif text-xl text-gradient-gold whitespace-nowrap">
                      &euro;{item.price}
                    </span>
                  </div>
                  <p className="text-sm text-bronze-200/50 leading-relaxed mb-4 min-h-[3.5rem]">
                    {c?.description ?? item.description}
                  </p>

                  {cart[item.id] ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-9 h-9 rounded-full border border-bronze-400/30 flex items-center justify-center text-bronze-200 hover:bg-bronze-400/10 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-serif text-lg text-bronze-100 w-6 text-center">
                          {cart[item.id]}
                        </span>
                        <button
                          onClick={() => addToCart(item.id)}
                          className="w-9 h-9 rounded-full border border-bronze-400/30 flex items-center justify-center text-bronze-200 hover:bg-bronze-400/10 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-sm text-bronze-300/80">
                        &euro;{item.price * cart[item.id]}
                      </span>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(item.id)}
                      className="w-full py-2.5 rounded-full border border-bronze-400/25 text-sm font-medium tracking-wider uppercase text-bronze-200 hover:bg-bronze-400/10 hover:border-bronze-400/50 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      {t.menu.add}
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Floating cart button */}
      {totalItems > 0 && !cartOpen && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-bronze-400 to-gold-400 text-charcoal-950 font-medium shadow-bronze-glow transition-transform hover:scale-105 animate-fade-up"
        >
          <ShoppingBag className="w-5 h-5" />
          <span className="text-sm tracking-wider uppercase">
            {totalItems} {totalItems === 1 ? t.menu.item : t.menu.items}
          </span>
          <span className="font-serif text-lg">&euro;{totalPrice}</span>
        </button>
      )}

      {/* Cart drawer */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          cartOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-charcoal-950/70 backdrop-blur-sm transition-opacity duration-500 ${
            cartOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setCartOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 bottom-0 w-full max-w-md bg-charcoal-900 border-l border-bronze-400/20 transition-transform duration-500 flex flex-col ${
            cartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-bronze-400/15">
            <h3 className="font-serif text-2xl text-gradient-gold">{t.menu.order}</h3>
            <button
              onClick={() => setCartOpen(false)}
              className="text-bronze-200/60 hover:text-bronze-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {orderPlaced ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-bronze-400 to-gold-400 flex items-center justify-center">
                <Check className="w-8 h-8 text-charcoal-950" />
              </div>
              <h4 className="font-serif text-2xl text-bronze-100">{t.menu.placed}</h4>
              <p className="text-bronze-200/50 text-sm">{t.menu.placedText}</p>
            </div>
          ) : cartLines.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8 text-center">
              <ShoppingBag className="w-12 h-12 text-bronze-400/30" strokeWidth={1} />
              <p className="text-bronze-200/40">{t.menu.empty}</p>
              <button
                onClick={() => setCartOpen(false)}
                className="text-bronze-300 hover:text-bronze-200 text-sm tracking-wider uppercase transition-colors"
              >
                {t.menu.browse}
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartLines.map((line) => {
                  const c = copy[line.item.id as keyof typeof copy];
                  return (
                    <div key={line.item.id} className="flex items-center gap-4">
                      <img
                        src={line.item.image}
                        alt={c?.name ?? line.item.name}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-base text-bronze-100 truncate">
                          {c?.name ?? line.item.name}
                        </h4>
                        <p className="text-sm text-bronze-300/70">&euro;{line.item.price} {t.menu.each}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            onClick={() => removeFromCart(line.item.id)}
                            className="w-7 h-7 rounded-full border border-bronze-400/25 flex items-center justify-center text-bronze-200 hover:bg-bronze-400/10 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm text-bronze-100 w-5 text-center">{line.qty}</span>
                          <button
                            onClick={() => addToCart(line.item.id)}
                            className="w-7 h-7 rounded-full border border-bronze-400/25 flex items-center justify-center text-bronze-200 hover:bg-bronze-400/10 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <span className="font-serif text-lg text-gradient-gold">
                        &euro;{line.item.price * line.qty}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="p-6 border-t border-bronze-400/15 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-bronze-200/60 text-sm tracking-wider uppercase">{t.menu.total}</span>
                  <span className="font-serif text-3xl text-gradient-gold">&euro;{totalPrice}</span>
                </div>
                <button
                  onClick={placeOrder}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-bronze-400 via-gold-400 to-bronze-500 text-charcoal-950 font-medium tracking-wider uppercase text-sm hover:shadow-bronze-glow transition-all duration-300"
                >
                  {t.menu.place}
                </button>
              </div>
            </>
          )}
        </aside>
      </div>
    </section>
  );
}
